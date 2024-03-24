import { memo, useState } from "react"
import Image from "next/image"
import logo from "@/lib/ui/assets/logo.png"
import { Box } from "@/lib/ui/pirimitives/box"
import { styled } from "styled-components"
import { H3 } from "@/lib/ui/pirimitives/text"
import { up } from "@/lib/ui/breakpoints"

const PointeredH3 = styled(H3)`
  cursor: pointer;
`
const ShowBox = styled.div`
  z-index: 10;
  position: absolute;
  width: 150px;
  height: 200px;
  right: 50px;
  top: 50px;
  gap: 12px;
  display: flex;
  justify-contet: space-between;
  align-items: center;
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

  const locationHandler = (location: string) => {
    if (location) {
      const elem = document.getElementById(location)
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
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
        <PointeredH3
          onClick={() => {
            locationHandler("games")
          }}
        >
          GAMES
        </PointeredH3>
        <PointeredH3
          onClick={() => {
            locationHandler("gallery")
          }}
        >
          GALLERY
        </PointeredH3>
        <PointeredH3
          onClick={() => {
            locationHandler("contact")
          }}
        >
          CONTACT
        </PointeredH3>
        <PointeredH3
          onClick={() => {
            locationHandler("aboutUs")
          }}
        >
          ABOUT US
        </PointeredH3>
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
          <PointeredH3
            onClick={() => {
              locationHandler("games")
            }}
          >
            GAMES
          </PointeredH3>
          <PointeredH3
            onClick={() => {
              locationHandler("gallery")
            }}
          >
            GALLERY
          </PointeredH3>
          <PointeredH3
            onClick={() => {
              locationHandler("contact")
            }}
          >
            CONTACT
          </PointeredH3>
          <PointeredH3
            onClick={() => {
              locationHandler("aboutUs")
            }}
          >
            ABOUT US
          </PointeredH3>
        </ShowBox>
      )}
    </Wrap>
  )
})

export default Header
