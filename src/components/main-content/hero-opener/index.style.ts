import { css } from '@/style/stitches.config'

export const styledHeroOpener = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
})()

export const styledHeroOpenerTextContainer = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '128px'
})()

export const styledMoreButton = css({
    border: 'none',
    outline: 'none',
    height: '72px',
    width: '72px',
    borderRadius: '50%',
    backgroundColor: '$contrast',
    marginTop: '72px',
    textTransform: 'lowercase',
    fontFamily: '$sansSerif',
    opacity: 0,

    '&:hover': {
        cursor: 'pointer',
    }
})()