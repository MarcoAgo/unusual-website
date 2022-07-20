import { Component, createEffect, createSignal, JSX, onMount } from 'solid-js'
import HeroOpener from '@/components/main-content/hero-opener'
import BorderContactsColumn from '../border-contacts-column'
import Scrollbar from 'smooth-scrollbar'
import { css } from '@/style/stitches.config'
import useStoreSelector from '@/context/store/utils/hooks/useSelector'
import { journeyDataSelector } from '@/context/store/store-slices/journey/selectors'

const styledContainer = css({
  height: '100vh',
  width: '100vw',
  backgroundColor: '$mainBackground',
})()

const MainContent: Component = (): JSX.Element => {
  const [scrollbar, setScrollbar] = createSignal<Scrollbar>()
  const journeyState = useStoreSelector(journeyDataSelector)

  onMount(() => {
    const options = {
        renderByPixels: true,
        damping: 0.1,
    }
    
    const scroller = Scrollbar.init(document.querySelector('#scroll-container') as HTMLElement, options)
    setScrollbar(scroller)
  })

  createEffect(() => {
    if (journeyState.isStarted) {
      scrollbar()?.scrollIntoView(document.querySelector('#scroll-target') as HTMLElement)
    }
  })

  return (
    <>
      <BorderContactsColumn />
      <div id="scroll-container" class={styledContainer}>
          <HeroOpener />
          <div id="scroll-target" style={{ height: '100vh', width: '100vw', "background-color": '#474747' }}></div>
      </div>
    </>
  )
}

export default MainContent
