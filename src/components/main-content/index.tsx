import { Component, JSX } from 'solid-js'
import HeroOpener from '@/components/main-content/hero-opener'
import BorderContactsColumn from '../border-contacts-column'

const MainContent: Component = (): JSX.Element => {
  return (
    <>
      <BorderContactsColumn />
      <HeroOpener />
    </>
  )
}

export default MainContent
