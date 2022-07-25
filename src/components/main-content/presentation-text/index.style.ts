import { css } from "@/style/stitches.config";

export const styledPresentationText = css('div', {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '& #animated-text-container': {
        opacity: 0
    }
})()

export const styledPresentationAnimatedTxt = css('div', {
    opacity: 0,
})()

export const styledPresentationTxtParagraph = css('p', {
    opacity: 0,
    color: '$text',
    fontFamily: '$sansSerif',
    padding: '0 25%',
    fontSize: '$paragraph',
    lineHeight: '32px',
    marginTop: '24px',
    textAlign: 'justify',
})()