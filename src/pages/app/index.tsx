import { styledApp } from './index.style'
import ThemeContextProvider from '../../context/theme'
import Switch from '@/components/switch'
import Container from '@/components/container'

function App() {
    return (
    <div class={styledApp}>
        <ThemeContextProvider>
            <Container>
                <Switch />
            </Container>
        </ThemeContextProvider>
    </div>
  )
}

export default App
