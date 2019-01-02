`@hungry/bulma-theme`
Sass bulma variables converted to typesafe function. Extracted via `@hunry/sass-ts-theme-creator`.

### Why
I wanted to have typesafe `sass` variables to create easly some other component based upon defined variables.


### How it works
* it has two parts, for `runtime` and `build time`.

### What is required for:
#### build part
in case of using `webpack` as a bundler:
1) `@hungry/webpack-sass-theme-loader` or `sass-var-loader` (i.e. `@epegzz/sass-vars-loader`)
2) `sass-loader` 

#### runtime part

### Overriding theme
```ts
import { theme as bulmaTheme, color, ThemeOverriding } from '@hungry/bulma-theme'

const overrideColors: ThemeOverriding = (defaultTheme) => ({
  ...defaultTheme,
  grey: '#8c9b9d',
  greyLight: '#a9afb7',
  greyLighter: '#dee2e5',
  orange: '#e67e22',
  yellow: '#f1b70e',
  green: '#2ecc71',
  turquoise: '#1abc9c',
  blue: '#3498db',
  purple: '#8e44ad',
  red: '#e74c3c',
  whiteTer: '#ecf0f1',
  yellowInvert: '#fff',
  primary: '#34495e',
})

const overrideFonts: ThemeOverriding = defaultTheme => ({
  ...defaultTheme,
  familyMonospace: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  familySansSerif: '"Inconsolata", "Consolas", "Monaco", monospace',
})

const overrideNavbar: ThemeOverriding = defaultTheme => ({
  ...defaultTheme,
  navbarHeight: '4rem',
  navbarItemColor: defaultTheme.whiteTer,
  navbarItemHoverColor: defaultTheme.primary,
  navbarItemHoverBackgroundColor: 'transparent',
  navbarItemActiveColor: defaultTheme.primary,
  navbarDividerBackgroundColor: defaultTheme.greyDarker, // divider color?
  navbarDropdownArrow: defaultTheme.white,
  navbarDropdownItemColor: defaultTheme.primary,
  navbarDropdownItemHover: 'transparent',
  navbarDropdownItemActiveBackgroundColor: 'transparent',
  navbarDropdownItemActiveColor: defaultTheme.primary,
  navbarDropdownBorderTop: `1px solid ${defaultTheme.greyDarker}`
})

const overrideButton: ThemeOverriding = defaultTheme => {
  const primaryDarken =
    color(defaultTheme.primary)
      .darken(0.05)
      .hex()

  return ({
    ...defaultTheme,
    buttonColor: defaultTheme.primary,
    buttonHoverColor: primaryDarken,
    buttonFocusColor: primaryDarken,
    buttonActiveColor: primaryDarken,
  })
}

const overrideText: ThemeOverriding = defaultTheme => {
  const primary =
    color(defaultTheme.primary)

  return ({
    ...defaultTheme,
    text: defaultTheme.primary,
    textLight: primary.lighten(0.1).hex(),
    textStrong: primary.darken(0.05).hex(),
  })
}

const overrideCore: ThemeOverriding = defaultTheme => ({
  ...defaultTheme,
  borderWidth: '10px',
  bodySize: '15px',
  titleWeight: 500,
  subtitleWeight: 400,
  size_7: '.85em',
  footerBackgroundColor: defaultTheme.whiteTer,
})

export const theme = bulmaTheme
  .map(overrideColors)
  .map(overrideFonts)
  .map(overrideNavbar)
  .map(overrideButton)
  .map(overrideText)
  .map(overrideCore)
```
