import { up } from "@/lib/ui/breakpoints"
import Button from "@/lib/ui/button"
import { Box } from "@/lib/ui/pirimitives/box"
import { Body, H1 } from "@/lib/ui/pirimitives/text"
import { memo } from "react"
import styled from "styled-components"

const Wrap = styled(Box)`
  margin: auto 0;
  align-items: flex-start;
  margin: 192px 45px 220px 45px;

  @media ${up("mobile")} {
    margin: 226px auto 217px 123px;
  }
`
export const Face = memo(function Face() {
  return (
    <Wrap gap={32} column width="40%">
      <H1 $withBorder>Story Collection Games</H1>
      <Body $withShadow $size="m">
        Is an international team dedicated to creating visual novels that have
        already captured the hearts of many players.
      </Body>
      <Button onClick={() => {}} variant="1">
        Explore
      </Button>
    </Wrap>
  )
})

export default Face
