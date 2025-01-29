'use client'

import { UIProvider } from '@yamada-ui/react'
import type { ReactNode } from 'react'
import { config, theme } from '../theme'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UIProvider theme={theme} config={config}>
      {children}
    </UIProvider>
  )
}
