import { css, keyframes } from '@/style/stitches.config'

const fade = keyframes({
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
})

export const styledChangeThemeModal = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--space-fullHeight)',
    width: 'var(--space-fullWidth)',
    zIndex: '$overlay',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    textAlign: 'center'
})()

export const styledChangeThemeModalContainer = css({
    width: '36vw',
    backgroundColor: '#fff',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
})()

export const styledButtons = css({
    display: 'flex',
    width: '100%',

    '& button': {
        width: '50%',
        border: 'none',
        outline: 'none',
        height: '48px',
        textTransform: 'uppercase',
        backgroundColor: '$none',
        cursor: 'pointer',
        fontSize: '$medium',
    },

    '& button:first-child': {
        borderTop: '2px solid lightgray',

        '&:hover': {
            animation: `${fade} 0.2s ease-in-out`,
            backgroundColor: 'lightgray',
        }
    },

    '& button:last-child': {
        borderTop: '2px solid #474747',

        '&:hover': {
            backgroundColor: '#474747',
            animation: `${fade} 0.4s ease-in-out`,
            color: 'white',
        }
    }
})()

export const styledTxtContainer = css({
    padding: '24px 48px 32px 48px',
})()