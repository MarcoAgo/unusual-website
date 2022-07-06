import { Component, JSX, onMount, } from 'solid-js'
import Switch from '@/components/switch'
import { styledHeader, styledHeaderLogo } from '@/components/header/index.style'
import gsap from 'gsap'

const Header: Component = (): JSX.Element => {
    onMount(() => {
        gsap.from('#logo', {
            duration: 2,
            x: -200,
            ease: 'power3.out',
        })


        gsap.from('#switch', {
            duration: 2,
            x: 200,
            ease: 'power3.out',
        })
    })

    return (
        <div class={styledHeader}>
            <p class={styledHeaderLogo} id="logo">mr.</p>
            <div id="switch">
                <Switch />
            </div>
        </div>
    )
}

export default Header