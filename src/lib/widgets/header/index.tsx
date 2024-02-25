import { memo } from "react"
import Image from "next/image"
import logo from "@/lib/ui/assets/logo.png"
import { Box } from "@/lib/ui/pirimitives/box"
import { styled } from "styled-components"
import { H3 } from "@/lib/ui/pirimitives/text"
import { up } from "@/lib/ui/breakpoints"

const Wrap = styled(Box)`
  // position: sticky;
  // top: 0;

  max-width: intrinsic;
  margin: 30px 44px 0 44px;

  & > ${Box} {
    display: none;
  }

  @media ${up("mobile")} {
    margin: 20px 123px 0 123px;

    & > ${Box} {
      display: flex;
    }
  }
`

export const Header = memo(function Header() {
  return (
    <Wrap fullWidth spaceBetween>
      <Image
        quality={100}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt="logo sc-games"
      />
      <Box width="50%" spaceBetween>
        <H3>GAMES</H3>
        <H3>GALLERY</H3>
        <H3>CONTACT</H3>
        <H3>ABOUT US</H3>
      </Box>
    </Wrap>
  )
})

export default Header
