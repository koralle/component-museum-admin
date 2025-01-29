import { UIProvider } from '@yamada-ui/react'
import type { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <UIProvider>
          {children}
        </UIProvider>
       </body>
    </html>
  )
}

export default RootLayout
