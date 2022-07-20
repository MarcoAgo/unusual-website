import { styledApp } from './index.style'
import ThemeContextProvider from '@/context/theme'
import StoreContextProvider from '@/context/store'
import Container from '@/components/container'
import { globalStyles } from '@/style/stitches.config'
import ChangeThemeModal from '@/components/modals/change-theme-modal'
import Header from '@/components/header'
import { createSignal, onMount } from 'solid-js'
import { ThemeStorageKey, ThemeType } from '../../context/theme/theme.types'
import MainContent from '@/components/main-content'

function App() {
  globalStyles()
  const [isOpen, setIsOpen] = createSignal(false)

  onMount(() => {
    const isModalTriggeredInSession =
      window.sessionStorage.getItem('modal-triggered') === 'true'
    const isLightTheme =
      !window.localStorage.getItem(ThemeStorageKey) || window.localStorage.getItem(ThemeStorageKey) === ThemeType.LIGHT
    const isSystemDarkThemed = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (isSystemDarkThemed && isLightTheme && !isModalTriggeredInSession) {
      setIsOpen(true)
    }
  })

  return (
    <div class={styledApp}>
      <StoreContextProvider>
        <ThemeContextProvider>
          {!isOpen() && (
            <Container>
              <Header />
              <MainContent />
            </Container>
          )}
          <ChangeThemeModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </ThemeContextProvider>
      </StoreContextProvider>
    </div>
  )
}

export default App
