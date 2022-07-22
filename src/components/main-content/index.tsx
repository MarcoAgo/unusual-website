import { Component, createEffect, createSignal, JSX, onCleanup, onMount } from 'solid-js'
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
  overflow: 'hidden',
})()

const MainContent: Component = (): JSX.Element => {
  const [scrollbar, setScrollbar] = createSignal<Scrollbar>()
  const [initScrollbar, setInitScrollbar] = createSignal(false)
  const [hideButton, setHideButton] = createSignal(false)
  const journeyState = useStoreSelector(journeyDataSelector)

  setTimeout(() => setInitScrollbar(true), 3000)

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

  const wheelListener = () => {
    if (!hideButton() && initScrollbar()) {
      setHideButton(true)
    }
  }

  onMount(() => {
    window?.addEventListener('wheel', wheelListener)
  })

  onCleanup(() => {
    window.removeEventListener('wheel', wheelListener)
  })

  return (
    <>
      <BorderContactsColumn />
      <div id="scroll-container" class={styledContainer}>
          <HeroOpener hideButton={hideButton()} />
          <div id="scroll-target" style={{ height: '100vh', width: '100vw', "background-color": '#474747' }}></div>
      </div>
    </>
  )
}

export default MainContent
