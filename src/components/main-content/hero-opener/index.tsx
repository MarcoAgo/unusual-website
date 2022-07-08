import { Component, JSX } from 'solid-js'
import {
  styledHeroOpener,
  styledHeroOpenerTextContainer
} from '@/components/main-content/hero-opener/index.style'
import AnimatedText from '@/components/main-content/animated-text'

const HeroOpener: Component = (): JSX.Element => {
  return (
    <div class={styledHeroOpener}>
      <div class={styledHeroOpenerTextContainer}>
        <AnimatedText text="An unusual website" />
        <AnimatedText size="tiny" text="The question is, why is unusual?" />
      </div>
    </div>
  )
}

export default HeroOpener
