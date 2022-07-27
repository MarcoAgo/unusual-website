import { Component, createEffect, createSignal, JSX, onCleanup, onMount } from 'solid-js'
import HeroOpener from '@/components/main-content/hero-opener'
import BorderContactsColumn from '../border-contacts-column'
import Scrollbar from 'smooth-scrollbar'
import { css } from '@/style/stitches.config'
import useStoreSelector from '@/context/store/utils/hooks/useSelector'
import { journeyDataSelector } from '@/context/store/store-slices/journey/selectors'
import PresentationText from './presentation-text'
import { scrollDataSelector, scrollDispatchersSelector } from '@/context/store/store-slices/scroll'

const styledContainer = css({
  height: '100vh',
  width: '100vw',
  backgroundColor: '$mainBackground',
  overflow: 'hidden',
})()

const MainContent: Component = (): JSX.Element => {
  const [scrollbar, setScrollbar] = createSignal<Scrollbar>()
  const [initScrollbar, setInitScrollbar] = createSignal(false)
  const [hideButton, setHideButton] = createSignal(false)
  const journeyState = useStoreSelector(journeyDataSelector)
  const scrollState = useStoreSelector(scrollDataSelector)
  const { userScrollDispatch } = useStoreSelector(scrollDispatchersSelector)

  createEffect(() => {
    if (initScrollbar()) {
      const options = {
        renderByPixels: true,
        damping: 0.1,
      }
    
      const scroller = Scrollbar.init(document.querySelector('#scroll-container') as HTMLElement, options)
      setScrollbar(scroller)
    }
  })

  createEffect(() => {
    if (journeyState.isStarted) {
      scrollbar()?.scrollIntoView(document.querySelector('#scroll-target') as HTMLElement)
    }
  })

  const wheelListener = (event: WheelEvent): void => {
    if (scrollbar()?.offset.y as number <= 160) {
      setHideButton(false)
    }

    if (!hideButton() && initScrollbar() && event.deltaY > 0) {
      setHideButton(true)
    }

    userScrollDispatch({
      ...scrollState(),
      offset: scrollbar()?.offset.y,
      contentHeight: scrollbar()?.getSize().content.height 
    })
  }

  onMount(() => {
    setTimeout(() => setInitScrollbar(true), 3000)
    window?.addEventListener('wheel', wheelListener)
  })

  onCleanup(() => {
    window.removeEventListener('wheel', wheelListener)
  })

  return (
    <>
      <BorderContactsColumn />
      <div id="scroll-container" class={styledContainer}>
          <HeroOpener hideButton={hideButton()} setHideButton={setHideButton} />
          <PresentationText />
          <div style={{ height: '100vh', width: '100vw', backgroundColor: '#474747' }}></div>
      </div>
    </>
  )
}

export default MainContent
