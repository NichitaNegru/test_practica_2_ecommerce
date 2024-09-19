import {Inter} from 'next/font/google'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


import { ModalProvider } from "@/providers/modal-provider"

import "./globals.css"

const inter = Inter({subsets: ['latin'] })

export const metadata ={
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children

 }: { 
  children: React.ReactNode 
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModalProvider />
          </header>
         <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
