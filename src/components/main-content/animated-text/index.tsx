import gsap from 'gsap'
import { Component, JSX, onMount } from 'solid-js'
import {
  styledAnimatedText,
  styledAnimatedTextAbsoluteContent
} from './index.style'

interface IAnimatedTextProps {
  text: string
  size?: 'tiny'
}

const AnimatedText: Component<IAnimatedTextProps> = (props): JSX.Element => {
  const { size, text } = props

  onMount(() => {
    gsap.from('#animated-text-container', {
      y: 100,
      visibility: 'hidden',
      opacity: 0
    })

    gsap.to('#animated-text-container', {
      y: 0,
      visibility: 'visible',
      opacity: 1,
      duration: 0.6,
      delay: 1.5,
      ease: 'power3.easeInOut'
    })

    gsap.to('#animated-layer', {
      delay: 2.1,
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.4,
      ease: 'power3.easeInOut'
    })
  })

  return (
    <div class={styledAnimatedText({ size })} id="animated-text-container">
      <div class={styledAnimatedTextAbsoluteContent}>
        <h1 id="hero-opener-title">{text}</h1>
        <div id="animated-layer" class="animated-layer" />
      </div>
    </div>
  )
}

export default AnimatedText
