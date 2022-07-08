import gsap from 'gsap'
import { Component, JSX, onMount } from 'solid-js'
import GithubIcon from '../shared/icons/github'
import TwitterIcon from '../shared/icons/twitter'
import { styledBorderSocialContact } from './index.style'

const BorderContactsColumn: Component = (): JSX.Element => {
  onMount(() => {
    gsap.to('#social-content-wrap', {
      delay: 1.5,
      duration: 1,
      opacity: 1
    })
  })

  return (
    <div class={styledBorderSocialContact} id="social-content-wrap">
      <div class="social-wrap">
        <a href="https://github.com/MarcoAgo">MarcoAgo</a>
        <div class="animated-div">
          <GithubIcon width={24} height={24} viewbox="0 0 24 24" />
        </div>
      </div>
      <div class="social-wrap">
        <a href="https://twitter.com">Mr.Looook</a>
        <div class="animated-div">
          <TwitterIcon width={24} height={24} viewbox="0 0 24 24" />
        </div>
      </div>
      <div class="social-wrap email">
        <a href="mailto:marco.agostinelli1996@gmail.com">Marco</a>
        <div class="animated-div">
          <p>@</p>
        </div>
      </div>
    </div>
  )
}

export default BorderContactsColumn
