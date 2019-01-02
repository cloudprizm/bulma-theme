import makeColor from 'color'

const toHex = (colorString: string) =>
  color(colorString).hex()

const isNestedColor = (val: string) =>
  val.indexOf('rgba') > -1 && val.indexOf('#') > -1

const resolveNestedHEXColor = (val: string) =>
  val.replace(/\#[0-9a-fA-F]+/,
    innerValue => color(innerValue).array().join(',')
  )

export const color = (val: string | string[]) =>
  makeColor(val)

export const toColorString = (val: string) =>
  isNestedColor(val)
    ? resolveNestedHEXColor(val)
    : toHex(val)

export const invertColor = (colorString: string) =>
  color(colorString).luminosity() > 0.55
    ? toColorString('rgba(0, 0, 0, 0.7)')
    : toColorString('#fff')

const isList = (d: string[]) =>
  d.filter(c => c === ',').length === (d.filter(c => c !== ',').length - 1)

const dimensionExtension = [/px/, /em/]
const hasDimension = (d: string[]) =>
  d.filter(c => dimensionExtension.map(p => p.test(c)).length > 0).length > 0

const hasOperator = (d: string[]) =>
  d.filter(c => ['+', '-', '*', '/'].indexOf(c) > -1).length > 0

const hasColorToResolve = (d: string[]) =>
  d.filter(isNestedColor).length > 0

const resolveValuesWithColor = (d: string[]) =>
  d.map(i => isNestedColor(i) ? toColorString(i) : i).join(' ')

const listJoin = (d: string[]) => d.join('')
const resolveDimensionValue = (d: string[]) => {
  const dimensions = dimensionExtension
    .map(e => e.test(d.join(' ')) ? e : null)
    .filter(Boolean)

  if (dimensions.length > 1)
    throw new Error(`Not able to resolve mixed dimensions, for ${d.join(' ')}`)

  const dimension = dimensions[0] as RegExp
  const dimensionReplacer = new RegExp(dimension as RegExp, 'g')
  const dimensionString = dimension.toString().replace(/\//g, '')
  const fn = d.join(' ').replace(dimensionReplacer, '')
  const safeEval = new Function(`return ${fn}`)
  return `${safeEval()}${dimensionString}`
}

// drop this ugly IF below
// const arrayResolvers = [
//   [isList, listJoin],
//   [and(hasOperator, hasDimension), resolveDimensionValue]
//   [hasColorToResolve, resolveValuesWithColor]
// ]

export const evaluate = (val: string | string[], variableName?: string) => {
  if (!Array.isArray(val)) return val

  if (isList(val)) return listJoin(val)
  if (hasOperator(val) && hasDimension(val)) return resolveDimensionValue(val)
  if (hasColorToResolve(val)) return resolveValuesWithColor(val)

  return val.join(' ')
}
