import { Component, JSX, onMount } from 'solid-js'
import {
  styledHeroOpener,
  styledHeroOpenerTextContainer,
  styledMoreButton
} from '@/components/main-content/hero-opener/index.style'
import AnimatedText from '@/components/main-content/animated-text'
import gsap from 'gsap'
import useStoreSelector from '@/context/store/utils/hooks/useSelector'
import { journeyDataSelector, journeyDispatchersSelector } from '@/context/store/store-slices/journey/selectors'

const HeroOpener: Component = (): JSX.Element => {
  const { userJourneyDispatch } = useStoreSelector(journeyDispatchersSelector)
  const journeyState = useStoreSelector(journeyDataSelector)

  console.log(journeyState)


  const handleMouseOver = (): void => {
    gsap.to('#discover-more-button', {
      duration: 0.5,
      ease: 'power4.out',
      scale: 1.3,
    })
  }

  const handleMouseLeave = (): void => {
    gsap.to('#discover-more-button', {
      duration: 0.5,
      ease: 'power4.out',
      scale: 1,
    })
  }

  const handleClick = (): void => {
    gsap.to('#discover-more-button', {
      duration: 0.5,
      ease: 'power4.out',
      scale: 1,
    }).then(() => {
      gsap.to('#discover-more-button', {
        duration: 1,
        ease: 'power4.in',
        y: '100vh',
      }).then((): void => {
        userJourneyDispatch({ ...journeyState, isStarted: true })
      })
    })
  }

  onMount(() => {
    gsap.to('#discover-more-button', {
      duration: 1,
      opacity: 1,
      delay: 2.5,
      ease: 'power4.in',
    })
  })

  return (
    <div class={styledHeroOpener}>
      <div class={styledHeroOpenerTextContainer}>
        <AnimatedText text="An unusual website" />
        <AnimatedText size="tiny" text="The question is, why is unusual?" />
        <div>
          <button 
            id="discover-more-button" 
            onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            class={styledMoreButton}
          >
            {journeyState.isStarted ? 'Discover' : 'More'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroOpener
