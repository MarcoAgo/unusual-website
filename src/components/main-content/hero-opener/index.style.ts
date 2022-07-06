import { css } from '@/style/stitches.config'

export const styledHeroOpener = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: 'calc(100vh - 96px)',

    '& h1': {
        marginBottom: 160,
        color: '$contrast',
    }
})()