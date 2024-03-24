import { memo, useState } from "react"
import Image from "next/image"
import logo from "@/lib/ui/assets/logo.png"
import { Box } from "@/lib/ui/pirimitives/box"
import { styled } from "styled-components"
import { H3 } from "@/lib/ui/pirimitives/text"
import { up } from "@/lib/ui/breakpoints"

const ShowBox = styled.div`
position: absolute;
width: 150px;
height: 200px;
right: 50px;
top: 50px;
gap: 12px;
  display: flex;
  justify-contet: space-between;
  align-items; center;
  flex-direction: column;
`
const Wrap = styled(Box)`
  // position: sticky;
  // top: 0;

  max-width: -webkit-fill-available;
  max-width: -moz-available;
  max-width: fill-available;
  margin: 30px 44px 0 44px;

  & > ${Box} {
    display: none;
  }
  & > div svg {
    display: block;
    transition: transform 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${up("mobile")} {
    margin: 20px 123px 0 123px;

    & > ${Box} {
      display: flex;
    }
    & > div svg {
      display: none;
    }
  }
`

export const Header = memo(function Header() {
  const [show, setShow] = useState(false)
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
        <H3>
          <a style={{ textDecoration: "none" }} href="#games">
            GAMES
          </a>
        </H3>
        <H3>
          <a style={{ textDecoration: "none" }} href="#gallery">
            GALLERY
          </a>
        </H3>
        <H3>
          <a style={{ textDecoration: "none" }} href="#contact">
            CONTACT
          </a>
        </H3>
        <H3>
          <a style={{ textDecoration: "none" }} href="#aboutUs">
            ABOUT US
          </a>
        </H3>
      </Box>
      <div onClick={() => setShow(!show)}>
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.887695" y1="0.5" x2="19.0003" y2="0.5" stroke="white" />
          <line
            x1="0.887695"
            y1="8.48669"
            x2="19.0003"
            y2="8.48669"
            stroke="white"
          />
          <line
            x1="0.887695"
            y1="16.4734"
            x2="19.0003"
            y2="16.4734"
            stroke="white"
          />
        </svg>
      </div>
      {show && (
        <ShowBox>
          <H3>
            <a style={{ textDecoration: "none" }} href="#games">
              GAMES
            </a>
          </H3>
          <H3>
            <a style={{ textDecoration: "none" }} href="#gallery">
              GALLERY
            </a>
          </H3>
          <H3>
            <a style={{ textDecoration: "none" }} href="#contact">
              CONTACT
            </a>
          </H3>
          <H3>
            <a style={{ textDecoration: "none" }} href="#aboutUs">
              ABOUT US
            </a>
          </H3>
        </ShowBox>
      )}
    </Wrap>
  )
})

export default Header
