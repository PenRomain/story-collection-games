import { up } from "@/lib/ui/breakpoints"
import Button from "@/lib/ui/button"
import { Box } from "@/lib/ui/pirimitives/box"
import { Body, H2, H4 } from "@/lib/ui/pirimitives/text"
import Image from "next/image"
import { memo } from "react"
import { styled } from "styled-components"
import series from "@/lib/ui/assets/projects/series.png"
import alters from "@/lib/ui/assets/projects/alters.png"
import amazons from "@/lib/ui/assets/projects/amazons.png"

const ProjectWrap = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  & > ${Box} {
    align-items: flex-start;
    & > :first-child {
      margin-bottom: 10px;
    }
    & > :nth-child(2) {
      margin-bottom: 15px;
    }
    & > :nth-child(3) {
      margin-bottom: 25px;
    }
  }

  @media ${up("mobile")} {
    align-items: center;
    flex-direction: row;
    gap: 30px;
  }
`
const TextWrap = styled(Box)`
  align-items: flex-start;
  gap: 20px;

  @media ${up("mobile")} {
    width: 50%;
    gap: 32px;
  }
`
const Wrap = styled(Box)`
  padding: 100px 45px 40px 45px;
  gap: 100px;

  @media ${up("mobile")} {
    padding: 220px 53px 90px 53px;
    gap: 240px;
  }
`

export const Board = memo(function Board() {
  return (
    <Wrap fullWidth column>
      <TextWrap fullWidth column>
        <H2>About us</H2>
        <Body $size="m">
          Story Collection Games is a successful startup actively growing since
          2020. A permanent team of artists, animators, narrative, sound and
          game designers Experience working with major holdings. Monetising
          through IN-APP & ADS. Authored USP in casual games. We stand for
          quality, innovation and unique storytelling aimed at different target
          audiences and their needs.
        </Body>
        <Button variant="2">Play now</Button>
      </TextWrap>

      <TextWrap fullWidth column>
        <H2>Our projects</H2>
        <Body $size="m">
          Our goal is to fill the world of visual novels with the most diverse
          content possible, suitable for every reader.
        </Body>
        <ProjectWrap fullWidth>
          <Image
            src={series.src}
            width={series.width}
            height={series.height}
            alt="series"
          />
          <Box fullWidth gap={0} column>
            <H4>Series</H4>
            <H4>status: publishing</H4>
            <Body $size="xsm">
              Current project, that continues to delight our users daily.
            </Body>
            <Button
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              variant="2"
            >
              Play on IOS/Android
            </Button>
          </Box>
        </ProjectWrap>

        <ProjectWrap fullWidth>
          <Image
            src={alters.src}
            width={alters.width}
            height={alters.height}
            alt="alters"
          />
          <Box fullWidth gap={0} column>
            <H4>Alters</H4>
            <H4>status: closed</H4>
            <Body $size="xsm">
              Our first project settled in the hearts of many thousands users
              and will forever remain in ours.
            </Body>
          </Box>
        </ProjectWrap>

        <ProjectWrap fullWidth>
          <Image
            src={amazons.src}
            width={amazons.width}
            height={amazons.height}
            alt="amazons"
          />
          <Box fullWidth gap={0} column>
            <H4>Amazons of Philo Islands</H4>
            <H4>status: development</H4>
            <Body $size="xsm">Contact us for Collaboration</Body>
            <Button
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              variant="2"
            >
              Contact
            </Button>
          </Box>
        </ProjectWrap>
      </TextWrap>
    </Wrap>
  )
})

export default Board
