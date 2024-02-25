import styled from "styled-components"

export const Touchable = styled("button")`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: normal;
  overflow: visible;
  padding: 0;

  &:disabled,
  &[disabled] {
    cursor: default;
    opacity: 0.4;
  }
`

export const TouchableCentered = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: center;
`

Touchable.defaultProps = {
  type: "button",
  color: "inherit",
}
