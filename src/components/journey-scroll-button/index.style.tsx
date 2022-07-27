import { css } from "@/style/stitches.config";


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
    color: '$mainBackground',

    '&:hover': {
        cursor: 'pointer',
    }
})()