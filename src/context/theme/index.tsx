import { createContext, createSignal, JSX, onMount, useContext } from 'solid-js'
import { ThemeStorageKey, ThemeType } from './theme.types'

const ThemeContext = createContext()

export interface IThemeContextProviderProps {
    children: JSX.Element
}

export interface IThemeHookValues {
    current: () => { current: ThemeType }
    changeTheme: (theme: string) => typeof theme
}

function ThemeContextProvider(props: IThemeContextProviderProps) {
    const [current, setCurrent] = createSignal({ current: ThemeType.LIGHT })

    const store = {
        current,
        changeTheme: (theme: ThemeType) => {
            setCurrent({ current: theme })
            window.localStorage.setItem(ThemeStorageKey, current().current)
            return theme
        }
    }

    onMount(() => {
        const storageTheme = window.localStorage.getItem(ThemeStorageKey)
        if (storageTheme) {
            setCurrent({ current: storageTheme as ThemeType })
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
