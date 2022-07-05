import { IThemeHookValues, useTheme } from '../../context/theme'

function Switch() {
    const theme: IThemeHookValues = useTheme()

    const handleSwitchClick = () => {
        const currentTheme = theme.current().current === 'dark' ? 'default' : 'dark'
        theme.changeTheme(currentTheme)
    }

    return (
        <div>
            <button onClick={handleSwitchClick}>{theme.current().current === 'dark' ? 'default' : 'dark'}</button>
        </div>
    )
}

export default Switch