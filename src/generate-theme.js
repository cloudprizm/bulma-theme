const fs = require('fs')
const path = require('path')
const findNodeModules = require('find-node-modules')

const { enableRuntimeTranspilation } = require('@hungry/babel-preset-cli')
enableRuntimeTranspilation()

const { parseFile } = require('@hungry/sass-ts-theme-creator')

const withinSRC = (file) => path.resolve(__dirname, file)

const typescriptThemeFunction = parseFile({
  file: withinSRC('./variables.sass'),
  includePaths: findNodeModules({ cwd: __dirname }).map(withinSRC)
})

fs.writeFileSync(withinSRC('__generated__/theme.ts'), typescriptThemeFunction)