import { scrollDataSelector } from "@/context/store/store-slices/scroll";
import useStoreSelector from "@/context/store/utils/hooks/useSelector";
import { Component, createEffect, JSX } from "solid-js";
import { styledPresentationAnimatedTxt, styledPresentationText, styledPresentationTxtParagraph } from "./index.style";
import gsap from "gsap";
import AnimatedText from "../animated-text";
import { journeyDataSelector } from "@/context/store/store-slices/journey/selectors";

const PresentationText: Component = (): JSX.Element => {
    const scrollState = useStoreSelector(scrollDataSelector)
    const journeyState = useStoreSelector(journeyDataSelector)

    createEffect(() => {
        const aos = (scrollState().contentHeight / 2) - 800 < scrollState().offset
        
        if ((!!scrollState().contentHeight && aos) || journeyState.isStarted) {
            gsap.to("#presentation-animated-text-container", {
                duration: 1,
                opacity: 1,
                y: -100,
            })

            gsap.to("#presentation-text", {
                duration: 1,
                opacity: 1,
                y: -100,
            })
        }
    })

    return (
        <div class={styledPresentationText} id="scroll-target">
            <div id="presentation-animated-text-container" class={styledPresentationAnimatedTxt}>
                <AnimatedText text="About Me"/>
            </div>
            <p id="presentation-text" class={styledPresentationTxtParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et semper ipsum. Integer viverra eros ipsum, ac vestibulum dui accumsan venenatis. Aenean quis ante eros. Donec non urna tellus. In erat felis, vulputate vel consectetur ac, scelerisque at enim. Vestibulum vitae sapien sit amet lorem euismod tempus. Donec at viverra sem, vitae suscipit sapien. Praesent tincidunt porta lorem, et semper lectus egestas ut. Sed a magna ac nisl imperdiet accumsan sed sed turpis. Sed tempor malesuada lectus eu tincidunt. Phasellus congue fermentum metus vitae luctus. Fusce efficitur, sapien vel congue rhoncus, dolor mauris dapibus elit, non vestibulum mauris est at purus. Donec egestas, orci eu rutrum efficitur, neque elit scelerisque lectus, dictum ullamcorper odio orci et nunc. Morbi sagittis felis elit, eu semper elit consectetur eget.
            </p>
        </div>
    )
}

export default PresentationText;