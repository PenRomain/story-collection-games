import styled, { css } from "styled-components"
import type { ComponentProps } from "react"

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["fullWidth", "width", "gap", "column", "spaceBetween", "wrap"].includes(
      prop,
    ),
})<{
  fullWidth?: boolean
  width?: string
  gap?: number
  column?: boolean
  spaceBetween?: boolean
  wrap?: boolean
}>`
  display: flex;
  flex-direction: ${(p) => (p.column ? "column" : "row")};
  align-items: center;
  ${({ wrap = false }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  width: ${({ fullWidth, width = "max-content" }) =>
    fullWidth ? "100%" : width};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
`

Box.defaultProps = {
  gap: 8,
  wrap: false,
}

export type BoxProps = ComponentProps<typeof Box>
