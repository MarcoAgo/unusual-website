import { Component, JSX } from 'solid-js'
import { useTheme } from '../../context/theme'
import { darkThemeConfig } from '@/style/dark-theme.config'
import { css } from '@/style/stitches.config'

const styledContainer = css({
    height: '100vh',
    width: '100vw',
    backgroundColor: '$mainBackground',
})()

const Container: Component<{ children: JSX.Element }> = (props) => {
    const theme = useTheme()

    return (
        <div class={theme.current().current === 'default' ? '' : darkThemeConfig}>
            <div class={styledContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Container