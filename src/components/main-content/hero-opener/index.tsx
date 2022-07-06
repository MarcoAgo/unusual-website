import { Component, JSX } from 'solid-js'
import { styledHeroOpener } from '@/components/main-content/hero-opener/index.style'

const HeroOpener: Component = (): JSX.Element => {

    return (
        <div class={styledHeroOpener}>
            <h1 id="hero-opener-title">Welcome to an Unusual website</h1>
        </div>
    )
}

export default HeroOpener