import { Component, createEffect, JSX } from 'solid-js'
import {
    styledButtons,
    styledChangeThemeModal,
    styledChangeThemeModalContainer,
    styledTxtContainer
} from '@/components/modals/change-theme-modal/index.styled'
import { ThemeType } from '../../../context/theme/theme.types'
import { useTheme } from '../../../context/theme'
import gsap from 'gsap'

interface IChangeThemeModalProps {
    isOpen: () => boolean
    setIsOpen: (theme: boolean) => void
}

const ChangeThemeModal: Component<IChangeThemeModalProps> = (props): JSX.Element => {
    const { isOpen, setIsOpen } = props
    const { changeTheme } = useTheme()

    createEffect(() => {
        gsap.set('#change-theme-modal', {
            transformOrigin: 'center center',
            scaleY: 0,
        })

        gsap.to('#change-theme-modal', {
            duration: .6,
            ease: 'power3.out',
            transformOrigin: 'center center',
            scaleY: 1,
        })
    }, [isOpen()])

    return (
        <div>
            <div class={styledChangeThemeModal} style={{ display: isOpen() ? 'flex' : 'none' }}>
                <div class={styledChangeThemeModalContainer} id="change-theme-modal">
                    <div class={styledTxtContainer}>
                        <h2>Hey!</h2>
                        <h3>It seems you are using a dark theme on your computer, do you want to enable it also for this website?</h3>
                        <p>Don't worry, if you like light theme you can simply close this modal :|</p>
                    </div>
                    <div class={styledButtons}>
                        <button onClick={() => setIsOpen(false)}>Close</button>
                        <button onClick={() => {
                            changeTheme(ThemeType.DARK)
                            setIsOpen(false)
                        }}>Enable</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeThemeModal