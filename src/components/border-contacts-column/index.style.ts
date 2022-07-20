import { css, keyframes } from '@/style/stitches.config'

const slideRight = keyframes({
    '0%': { left: 0 },
    '100%': { left: 96 },
})

const slideRightReverse = keyframes({
    '0%': { left: 96 },
    '100%': { left: 0 },
})

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
})

const reverseFadeIn = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
})

export const styledBorderSocialContact = css({
    width: 48,
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '$xlarge',
    opacity: 0,
    zIndex: '$overlay',

    '& .social-wrap': {
        marginBottom: '$xlarge',
        cursor: 'pointer',

        '& a': {
            opacity: '0',
            position: 'absolute',
            color: '$contrast',
            textDecoration: 'none',
            animation: `${reverseFadeIn} 0.5s`,
        },

        '& .animated-div': {
            position: 'relative',
            animation: `${slideRightReverse} 0.5s`,
            left: 0,
        },

        '&:hover': {

            '& .animated-div': {
                animation: `${slideRight} 0.5s`,
                left: 96
            },

            '& a': {
                opacity: '1',
                animation: `${fadeIn} 0.5s`,
                textDecoration: 'underline',
            }
        }
    },

    '& .email': {
        '& p': {
            color: '$contrast',
            fontSize: '$subtitle'
        }
    }
})()