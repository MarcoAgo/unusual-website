import { css } from '../../style/stitches.config'

const styledApp = css({
    padding: 0,
    margin: 0,
    backgroundColor: 'darkgrey',
    width: '100vw',
    height: '100vh',
})()

function App() {
    return (
    <div class={styledApp}>
    </div>
  )
}

export default App
