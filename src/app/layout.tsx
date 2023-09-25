import '@/styles/globals.css'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import { fontBarlow } from '@/styles/font'

export const metadata: Metadata = {
  title: 'Frontend Mentor - Sunnyside agency landing page',
  description: 'Your challenge is to build out this landing page and get it looking as close to the design as possible.',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={fontBarlow.className}>
      {children}
    </body>
  </html>
)

export default RootLayout
