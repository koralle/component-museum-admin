import { type UsageTheme, extendTheme } from '@yamada-ui/react'
import { components } from './components'
import { semantics } from './semantics'
import { styles } from './styles'
import { tokens } from './tokens'

const customTheme = {
  components,
  styles,
  semantics,
  ...tokens,
} satisfies UsageTheme

export const theme = extendTheme(customTheme)()

export * from './config'
