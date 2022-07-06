import { createStitches } from '@stitches/core'

export const { css, createTheme, globalCss, keyframes } = createStitches({
    theme: {
        colors: {
            // Text colors
            text: '#474747',

            // Layout color
            mainBackground: 'lightgray',
            contrast: '#474747',
        },
        space: {
            fullHeight: '100vh',
            fullWidth: '100vw',
        },
        fontSizes: {
            unreadable: '8px',
            small: '12px',
            paragraph: '16px',
            subtitle: '24px',
            title: '32px',
        },
        fonts: {
            main: 'Roboto Mono, monospace',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {
            overlay: '100',
        },
        transitions: {},
    }
})

export const globalStyles = globalCss({
    body: {
        fontFamily: 'Roboto Mono, monospace',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',

        '&:webkit-scrollbar': {
            display: 'none',
        }
    },
    p: {
        margin: 0,
        padding: 0,
    },
    a: {
        margin: 0,
        padding: 0,
    }
})