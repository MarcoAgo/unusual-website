import { createTheme } from '@/style/stitches.config'

export const darkThemeConfig = createTheme('dark-theme', {
    colors: {
        // Text colors
        text: 'white',

        // Layout color
        mainBackground: '#474747',
        contrast: 'lightgray',

        none: 'transparent',
    },
    space: {
        fullHeight: '100vh',
        fullWidth: '100vw',

        // Layout spacing
        base: '16px',
        medium: '24px',
        large: '32px',
        xlarge: '48px',
        xxlarge: '64px',
        xxxlarge: '128px',
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
    fontWeights: {
        medium: '500',
        bold: '700',
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {

    },
    radii: {},
    shadows: {},
    zIndices: {
        overlay: '100',
    },
    transitions: {},
})