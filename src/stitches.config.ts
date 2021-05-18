import createCss from '@stitches/react'

export const { styled, css } = createCss({
  theme: {
    colors: {
      gray500: 'hsl(206,10%,76%)',
      blue500: 'hsl(206,100%,50%)',

      purple500: 'hsl(252,50%,60%)',
      purple600: 'hsl(252,60%,60%)',
      purple700: 'hsl(252,70%,60%)',
      purple800: 'hsl(252,80%,60%)',

      red100: '#FFE5D4',
      red200: '#FFC5AA',
      red300: '#FF9E7F',
      red400: '#FF7960',
      red500: '#FF3C2B',
      red600: '#DB1F1F',
      red700: '#B71523',
      red800: '#930D24',
      red900: '#7A0824',

      green500: 'hsl(148,60%,60%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})
