import { createCss, StitchesCss } from '@stitches/react'
export type { StitchesVariants } from '@stitches/react'

const stitches = createCss({
  theme: {
    colors: {
      gray000: 'hsl(0 0% 99%)',
      gray100: 'hsl(0 0% 97.3%)',
      gray200: 'hsl(0 0% 95%)',
      gray300: 'hsl(0 0% 92.9%)',
      gray400: 'hsl(0 0% 90.8%)',
      gray500: 'hsl(0 0% 88.6%)',
      gray600: 'hsl(0 0% 85.7%)',
      gray700: 'hsl(0 0% 78%)',
      gray800: 'hsl(0 0% 56.1%)',
      gray900: 'hsl(0, 0%, 43.5%)',
      gray1000: 'hsl(0 0% 9%)',

      purple000: 'hsl(280 65% 99.4%)',
      purple100: 'hsl(276 100% 99%)',
      purple200: 'hsl(276 72.2% 96.7%)',
      purple300: 'hsl(275 66.8% 94.2%)',
      purple400: 'hsl(275 64.3% 91.2%)',
      purple500: 'hsl(274 62.7% 87.4%)',
      purple600: 'hsl(273 61.3% 81.6%)',
      purple700: 'hsl(272 60% 73.5%)',
      purple800: 'hsl(272 51% 54%)',
      purple900: 'hsl(272 50% 45.8%)',
      purple1000: 'hsl(272 66% 16%)',

      red000: 'hsl(359 100% 99.4%)',
      red100: 'hsl(359 100% 98.6%)',
      red200: 'hsl(360 91.4% 96.5%)',
      red300: 'hsl(360 87.2% 94.2%)',
      red400: 'hsl(360 83.6% 91.5%)',
      red500: 'hsl(360 79.8% 87.8%)',
      red600: 'hsl(359 74.9% 82.1%)',
      red700: 'hsl(359 69.5% 74.3%)',
      red800: 'hsl(358 75% 59%)',
      red900: 'hsl(358 65% 48.7%)',
      red1000: 'hsl(354 50% 14.6%)',

      green000: 'hsl(136 50% 98.9%)',
      green100: 'hsl(138 62.5% 96.9%)',
      green200: 'hsl(139 49.8% 94.1%)',
      green300: 'hsl(140 44.4% 90.4%)',
      green400: 'hsl(141 41.6% 85.4%)',
      green500: 'hsl(143 40% 78.7%)',
      green600: 'hsl(146 39.4% 69%)',
      green700: 'hsl(151 40.2% 54.1%)',
      green800: 'hsl(151 55% 41.5%)',
      green900: 'hsl(153 67% 28.5%)',
      green1000: 'hsl(155 40% 14%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      full: '9999px',
    },
    shadows: {},
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    transitions: {},
  },
  utils: {
    p: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (config) => (value: any) => ({
      width: value,
      height: value,
    }),

    appearance: (config) => (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (config) => (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (config) => (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

export type CSS = StitchesCss<typeof stitches>

export const { styled, css, theme, getCssString, global, keyframes, config } =
  stitches

export const utils = config.utils
