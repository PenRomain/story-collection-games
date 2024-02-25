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
      <body>
        <StyledJsxRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
