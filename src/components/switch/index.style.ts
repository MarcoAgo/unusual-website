import { css } from '@/style/stitches.config'

export const styledSwitch = css({
    width: '64px',
    height: '32px',
    backgroundColor: '$contrast',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '32px',
})()

export const styledSwitchButton = css({
    border: 'none',
    outline: 'none',
    color: '$text',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    letterSpacing: '2px',
    padding: 3,
    cursor: 'pointer',
})()

export const styledSwitchCircle = css({
    height: 26,
    width: 26,
    borderRadius: '50%',
    backgroundColor: '$mainBackground',
})()