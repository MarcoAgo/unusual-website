import { css } from '@/style/stitches.config'

export const styledHeader = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 64px)',
    padding: 32
})()

export const styledHeaderLogo = css({
    fontSize: '$subtitle',
    color: '$text',

    '&:hover': {
        cursor: 'pointer',
    }
})()