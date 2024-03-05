import { css, styled } from "styled-components"
import { inter, manrope, montserrat } from "./fonts"
import { up } from "../../breakpoints"

export type ButtonVariants = { $variant?: "1" | "2" }

const letterSpacing = css`
  letter-spacing: -0.02em;
`
const fontSizeProperties = {
  l: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    ${letterSpacing}
  `,
  m: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    ${letterSpacing}

    @media ${up("mobile")} {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  s: css`
    font-weight: 400;
    font-size: 13px;
    line-height: 19.5px;
    ${letterSpacing}
  `,
  xsm: css`
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  `,
  xsl: css`
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
  `,
  "1": css`
    font-size: 14px;
    line-height: 16.94px;
  `,
  "2": css`
    font-size: 12px;
    line-height: 14.52px;
  `,
}

const border = css`
  text-shadow:
    -1px -1px 0 #4a88a9,
    1px -1px 0 #4a88a9,
    -1px 1px 0 #4a88a9,
    1px 1px 0 #4a88a9;
`

const shadow = css`
  text-shadow: 0px 4px 30.299999237060547px #043c6d;
`

export const H1 = styled.h1<{ $withBorder?: boolean }>`
  ${montserrat.style}
  ${({ $withBorder }) => $withBorder && border}
  font-size: 53px;
  line-height: 52px;

  @media ${up("mobile")} {
    font-size: 93px;
    line-height: 100px;
  }
`

export const H2 = styled.h2<{ $withShadow?: boolean }>`
  ${montserrat.style}
  font-size: 32px;
  line-height: 30px;
  ${({ $withShadow }) => $withShadow && shadow}

  @media ${up("mobile")} {
    font-size: 53px;
    line-height: 60px;
  }
`
export const H3 = styled.h3`
  ${inter.style}
  font-weight: 300;
  font-size: 14px;
  line-height: 16.94px;
`

export const H4 = styled.h4<{ $withShadow?: boolean }>`
  ${manrope.style}
  ${letterSpacing}
  ${({ $withShadow }) => $withShadow && shadow}
  font-size: 17px;
  line-height: 25.5px;
`

export const Body = styled.p<{
  $size: "l" | "m" | "s" | "xsm" | "xsl"
  $withShadow?: boolean
}>`
  ${inter.style}
  ${({ $withShadow }) => $withShadow && shadow}
  ${({ $size }) => fontSizeProperties[$size]}
`

export const ButtonText = styled.span<ButtonVariants>`
  ${inter.style}
  font-weight: 400;
  ${({ $variant = "1" }) => fontSizeProperties[$variant]}
`
