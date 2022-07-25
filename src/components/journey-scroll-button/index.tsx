import { journeyDataSelector, journeyDispatchersSelector } from "@/context/store/store-slices/journey/selectors";
import { scrollDataSelector } from "@/context/store/store-slices/scroll";
import useStoreSelector from "@/context/store/utils/hooks/useSelector";
import { Component, createEffect, onMount } from "solid-js";
import { styledMoreButton } from "./index.style";
import gsap from "gsap";

interface IJourneyScrollButtonProps {
    hideButton: boolean
    setHideButton: (action: boolean) => void
}

const JourneyScrollButton: Component<IJourneyScrollButtonProps> = (props) => {
    const journeyState = useStoreSelector(journeyDataSelector);
    const { userJourneyDispatch } = useStoreSelector(journeyDispatchersSelector);
    const scrollData = useStoreSelector(scrollDataSelector);

    createEffect(() => {
        if (scrollData().offset && scrollData().offset >= scrollData().contentHeight / 3) {
            gsap.to('#discover-more-button', {
                ease: "power4.inOut",
                duration: 1.5,
                y: '150vh',
            })
        }
    })

    onMount(() => {
        gsap.to('#discover-more-button', {
            duration: 1,
            opacity: 1,
            delay: 2.5,
            ease: 'power4.in',
        })
    })

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
        props.setHideButton(true)

        gsap.to('#discover-more-button', {
            duration: 0.5,
            ease: 'power4.out',
            scale: 1,
        }).then(() => {
            gsap.to('#discover-more-button', {
                duration: 1,
                ease: 'power4.in',
                y: '50vh',
            }).then((): void => {
                userJourneyDispatch({ ...journeyState, isStarted: true })
            })
        })
    }

    return (
        <div>
            <button 
                id="discover-more-button" 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                class={styledMoreButton}
            >
                {journeyState.isStarted || props.hideButton ? 'Hi!' : 'More'}
            </button>
        </div>
    )
}

export default JourneyScrollButton