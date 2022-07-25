import { Component, createEffect, JSX, onMount } from 'solid-js'
import {
  styledHeroOpener,
  styledHeroOpenerTextContainer,
} from '@/components/main-content/hero-opener/index.style'
import AnimatedText from '@/components/main-content/animated-text'
import gsap from 'gsap'
import useStoreSelector from '@/context/store/utils/hooks/useSelector'
import { journeyDataSelector, journeyDispatchersSelector } from '@/context/store/store-slices/journey/selectors'
import JourneyScrollButton from '@/components/journey-scroll-button'

interface IHeroOpenerProps {
  hideButton: boolean
  setHideButton: (value: boolean) => void
}

const HeroOpener: Component<IHeroOpenerProps> = (props): JSX.Element => {
  const { userJourneyDispatch } = useStoreSelector(journeyDispatchersSelector)
  const journeyState = useStoreSelector(journeyDataSelector)

  createEffect(() => {
    if (props.hideButton) {
      gsap.to('#discover-more-button', {
        duration: 1.5,
        ease: 'power4.in',
        y: '48vh',
      })
      // userJourneyDispatch({ ...journeyState, isStarted: true })
    } else {
      gsap.to('#discover-more-button', {
        duration: 1.5,
        ease: 'power4.in',
        y: 0,
      })
      userJourneyDispatch({ ...journeyState, isStarted: false })
    }
  })

  return (
    <div class={styledHeroOpener}>
      <div class={styledHeroOpenerTextContainer}>
        <AnimatedText text="An unusual website" />
        <AnimatedText size="tiny" text="The question is, why is unusual?" />
        <JourneyScrollButton hideButton={props.hideButton} setHideButton={props.setHideButton} />
      </div>
    </div>
  )
}

export default HeroOpener
