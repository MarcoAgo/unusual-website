import { css } from '@/style/stitches.config'

export const styledAnimatedText = css({
  height: '64px',
  textAlign: 'center',
  fontSize: '$subtitle',
  color: '$contrast',
  marginBottom: '8px',

  variants: {
    size: {
      tiny: {
        height: '48px',
        fontSize: '$small',
        fontWeight: '300'
      }
    }
  }
})

export const styledAnimatedTextAbsoluteContent = css({
  height: 'inherit',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  '& .animated-layer': {
    height: '100%',
    width: '100%',
    backgroundColor: '$contrast',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '$overlay',
  },

  '& h1': {
    margin: 0,
    fontWeight: 'inherit',
  }
})()