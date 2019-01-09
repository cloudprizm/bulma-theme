import { evaluate } from '../src/helpers'

test('eval box shadow with colors', () => {
  const black = '#000'
  const input = [
    `0`,
    `8px`,
    `8px`,
    `rgba(${black}, 0.1)`,
    `,`,
    `0`,
    `0`,
    `0`,
    `1px`,
    `rgba(${black}, 0.1)`
  ]

  const boxShadowValue = evaluate(input, 'boxShadow')
  expect(boxShadowValue).toMatchSnapshot()
})

test('single negative value', () => {
  const input = [`-4px`]
  const result = evaluate(input)
  expect(result).toBe('-4px')
})

test('resolve px values', () => {
  const gap = '10px'
  const input = [`960px`, `+`, `(2 * ${gap})`]
  const desktopWidth = evaluate(input, 'desktop')
  expect(desktopWidth).toBe('980px')
})

test('resolve font family', () => {
  const input = [
    `BlinkMacSystemFont`, `,`,
    `-apple-system`, `,`,
    `"Segoe UI"`, `,`,
    `"Roboto"`, `,`,
    `"Oxygen"`, `,`,
    `"Ubuntu"`, `,`,
    `"Cantarell"`, `,`,
    `"Fira Sans"`, `,`,
    `"Droid Sans"`, `,`,
    `"Helvetica Neue"`, `,`,
    `"Helvetica"`, `,`,
    `"Arial"`, `,`,
    `sans-serif`
  ]

  const fontValue = evaluate(input, 'familySansSerif')
  expect(fontValue).toMatchSnapshot()
})