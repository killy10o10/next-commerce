const inter = Inter({ subsets: ['latin'] })
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from "@/providers/modal.provider";
import { ToasterProvider } from '@/providers/toast-provider';

import './globals.css'

export const metadata: Metadata = {
  title: 'Next Commerce',
  description: 'Your one stop shop built by Quami Killy',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
