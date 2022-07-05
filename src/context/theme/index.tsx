import { createContext, createEffect, createSignal, JSX, useContext } from 'solid-js'

const ThemeContext = createContext()

export interface IThemeContextProviderProps {
    children: JSX.Element
}

export interface IThemeHookValues {
    current: () => { current: string }
    changeTheme: (theme: string) => typeof theme
}

function ThemeContextProvider(props: IThemeContextProviderProps) {
    const [current, setCurrent] = createSignal({ current: 'default' })

    const store = {
        current,
        changeTheme: (theme: string) => {
            setCurrent({ current: theme })
            window.localStorage.setItem('theme', current().current)
            return theme
        }
    }

    createEffect(() => {
        const storageTheme = window.localStorage.getItem('theme')
        if (storageTheme) {
            console.log('here', storageTheme)
            setCurrent({ current: storageTheme })
        }
    })

    return (
        <ThemeContext.Provider value={store}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): IThemeHookValues { return useContext(ThemeContext) as IThemeHookValues }

export default ThemeContextProvider
