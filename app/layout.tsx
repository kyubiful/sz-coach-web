import React from 'react'
import { Navigation } from './Navigation'
import './globals.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
