"use server"

import { ReactNode } from "react"
import StyledJsxRegistry from "./registry"
import StyledComponentsRegistry from "@/lib/registry"

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body>
        <StyledJsxRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
