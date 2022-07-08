import { IThemeHookValues, useTheme } from '../../context/theme'
import {
  styledSwitch,
  styledSwitchButton,
  styledSwitchCircle
} from '@/components/switch/index.style'
import { ThemeType } from '../../context/theme/theme.types'
import gsap from 'gsap'
import { createEffect, createSignal, JSX, onMount } from 'solid-js'

function Switch(): JSX.Element {
  const theme: IThemeHookValues = useTheme()
  const [themeSignal, setThemeSignal] = createSignal(
    localStorage.getItem('theme')
  )

  createEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    gsap.to('#switch-circle', {
      duration: 0.3,
      x: storedTheme === ThemeType.LIGHT ? 0 : 32
    })
  }, [themeSignal])

  const handleSwitchClick = () => {
    const currentTheme =
      theme.current().current === ThemeType.DARK
        ? ThemeType.LIGHT
        : ThemeType.DARK
    gsap.to('#switch-circle', {
      duration: 0.3,
      x: currentTheme === ThemeType.LIGHT ? 0 : 32
    })
    theme.changeTheme(currentTheme)
    setThemeSignal(currentTheme)
  }

  onMount(() => {
    const storedTheme = localStorage.getItem('theme')
    gsap.to('#switch-circle', {
      duration: 0.3,
      x: storedTheme === ThemeType.LIGHT ? 0 : 32
    })
    setThemeSignal(storedTheme)
  })

  return (
    <div class={styledSwitch}>
      <button onClick={handleSwitchClick} class={styledSwitchButton}>
        <div id="switch-circle" class={styledSwitchCircle} />
      </button>
    </div>
  )
}

export default Switch
