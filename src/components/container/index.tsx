import { Component, JSX } from 'solid-js'
import { useTheme } from '../../context/theme'
import { darkThemeConfig } from '@/style/dark-theme.config'
import { ThemeType } from '../../context/theme/theme.types'

const Container: Component<{ children: JSX.Element }> = (props) => {
    const theme = useTheme()

    return (
        <div class={theme.current().current === ThemeType.LIGHT ? '' : darkThemeConfig}>
            {props.children}
        </div>
    )
}

export default Container