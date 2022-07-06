import { styledApp } from './index.style'
import ThemeContextProvider from '../../context/theme'
import Container from '@/components/container'
import { globalStyles } from '@/style/stitches.config'
import ChangeThemeModal from '@/components/modals/change-theme-modal'
import Header from '@/components/header'
import { createSignal, onMount } from 'solid-js'
import { ThemeStorageKey, ThemeType } from '../../context/theme/theme.types'

function App() {
    globalStyles()
    const [isOpen, setIsOpen] = createSignal(false)

    onMount(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
        if (darkThemeMq.matches && window.localStorage.getItem(ThemeStorageKey) === ThemeType.LIGHT) {
            setIsOpen(true)
        }
    })

    return (
    <div class={styledApp}>
        <ThemeContextProvider>
            {!isOpen() && (
                <Container>
                    <Header />
                </Container>
            )}
            <ChangeThemeModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </ThemeContextProvider>
    </div>
  )
}

export default App
