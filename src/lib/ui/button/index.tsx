import { isDefined } from "@/lib/common"
import { ComponentProps, ReactNode, memo } from "react"
import styled, { css } from "styled-components"
import { ButtonText, ButtonVariants } from "../pirimitives/text"
import { Touchable } from "../pirimitives/touchable"

type ButtonProps = ComponentProps<typeof Touchable> & {
  children?: ReactNode
  disabled?: boolean
  variant?: ButtonVariants["$variant"]
}
const Wrap = styled("button")<{ $disabled: boolean }>`
  padding: 14px 75px;
  border-radius: 25px;
  border: 1px solid white;
  background: linear-gradient(to right, #124bad, #7828fb);
  transition: border 0.1s ease-in-out;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        border: 1px solid gray;
      }
      &:active {
        transform: scale(0.98);
      }
      &:focus {
        appearance: none;
      }
    `}
`

export const Button = memo(function Button({
  onClick,
  children,
  variant,
  disabled = false,
  ...restProps
}: ButtonProps) {
  return (
    <Wrap $disabled={disabled} {...restProps} onClick={onClick}>
      {isDefined(children) && (
        <ButtonText $variant={variant}>{children}</ButtonText>
      )}
    </Wrap>
  )
})

export default Button
