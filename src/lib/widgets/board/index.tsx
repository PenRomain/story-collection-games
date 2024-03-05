import { up } from "@/lib/ui/breakpoints"
import Button from "@/lib/ui/button"
import { Box } from "@/lib/ui/pirimitives/box"
import { Body, H2, H4 } from "@/lib/ui/pirimitives/text"
import Image from "next/image"
import { memo, useState } from "react"
import { styled } from "styled-components"
import series from "@/lib/ui/assets/projects/series.png"
import alters from "@/lib/ui/assets/projects/alters.png"
import amazons from "@/lib/ui/assets/projects/amazons.png"
// import hot from "@/lib/ui/assets/projects/hot.png"
import outNow from "@/lib/ui/assets/projects/out-now.png"
import game1 from "@/lib/ui/assets/games/1.png"
import game2 from "@/lib/ui/assets/games/2.png"
import game3 from "@/lib/ui/assets/games/3.png"
import game4 from "@/lib/ui/assets/games/4.png"
import game5 from "@/lib/ui/assets/games/5.png"

const games = [game1, game2, game3, game4, game5]
const LeftButton = styled(Button)`
  position: absolute;
  z-index: 5;
  width: 48px;
  height: 48px;
  left: 24px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px;

  @media ${up("mobile")} {
    display: none;
  }
`
const RightButton = styled(Button)`
  position: absolute;
  z-index: 5;
  width: 48px;
  height: 48px;
  right: 24px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px;

  & > span > svg {
    transform: rotateZ(180deg);
  }

  @media ${up("mobile")} {
    display: none;
  }
`
const CarouselList = styled.div`
  display: flex;
  list-style: none;
  position: relative;
  width: 100dvw;
  height: 300px;
  justify-content: center;
  perspective: 300px;

  & > .carousel__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 250px;
    position: absolute;
    transition: all 0.3s ease-in;

    &[data-pos="0"] {
      z-index: 5;
    }

    &[data-pos="-1"],
    &[data-pos="1"] {
      opacity: 0.7;
      filter: blur(1px) grayscale(10%);
    }

    &[data-pos="-1"] {
      transform: translateX(-40%) scale(0.9);
      z-index: 4;
    }

    &[data-pos="1"] {
      transform: translateX(40%) scale(0.9);
      z-index: 4;
    }

    &[data-pos="-2"],
    &[data-pos="2"] {
      opacity: 0.4;
      filter: blur(3px) grayscale(20%);
    }

    &[data-pos="-2"] {
      transform: translateX(-70%) scale(0.8);
      z-index: 3;
    }

    &[data-pos="2"] {
      transform: translateX(70%) scale(0.8);
      z-index: 3;
    }
  }

  @media ${up("mobile")} {
    width: 100%;
    & > .carousel__item {
      width: max-content;
    }
  }
`
// const Carousel = styled("div")`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   align-items: center;
// `
const CarouselHeadLine = styled(Box)`
  align-items: flex-start;
  gap: 20px;

  @media ${up("mobile")} {
    gap: 32px;
`

const CarouselWrap = styled(Box)`
  gap: 40px;

  @media ${up("mobile")} {
    gap: 70px;
  }
`
const ProjectWrap = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: reltaive;

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
  const [activeIndex, setActiveIndex] = useState(-2)
  const directionHandler = (direction: "left" | "right") => {
    direction === "left" &&
      activeIndex !== -2 &&
      setActiveIndex((prev) => prev - 1)
    direction === "right" &&
      activeIndex !== 2 &&
      setActiveIndex((prev) => prev + 1)
  }
  const updatePosition = (newActiveIndex: number) => {
    setActiveIndex(newActiveIndex)
  }

  const getPos = (index: number) => {
    const diff = index - activeIndex
    if (Math.abs(diff) > 2) {
      return -index
    }
    return diff
  }
  return (
    <Wrap fullWidth column>
      <TextWrap fullWidth column>
        <H2 id="aboutUs">About us</H2>
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
        <H2 id="games">Our projects</H2>
        <Body $size="m">
          Our goal is to fill the world of visual novels with the most diverse
          content possible, suitable for every reader.
        </Body>
        <ProjectWrap fullWidth>
          <Image
            quality={100}
            src={series.src}
            width={series.width}
            height={series.height}
            alt="series"
          />
          <Image
            quality={100}
            style={{
              position: "absolute",
              transform: "scale(0.4) translateX(-100%) translateY(-100%)",
            }}
            src={outNow.src}
            width={outNow.width}
            height={outNow.height}
            alt="out now"
          />
          <Box fullWidth gap={0} column>
            <H4 $withShadow>Series</H4>
            <H4 $withShadow>status: publishing</H4>
            <Body $withShadow $size="xsm">
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
            quality={100}
            src={alters.src}
            width={alters.width}
            height={alters.height}
            alt="alters"
          />
          {/* <Image
            style={{
              position: "absolute",
              transform: "scale(0.4) translateX(-100%) translateY(-100%)",
            }}
            src={outNow.src}
            width={outNow.width}
            height={outNow.height}
            alt="hot"
          /> */}
          <Box fullWidth gap={0} column>
            <H4 $withShadow>Alters</H4>
            <H4 $withShadow>status: closed</H4>
            <Body $withShadow $size="xsm">
              Our first project settled in the hearts of many thousands users
              and will forever remain in ours.
            </Body>
          </Box>
        </ProjectWrap>

        <ProjectWrap fullWidth>
          <Image
            quality={100}
            src={amazons.src}
            width={amazons.width}
            height={amazons.height}
            alt="amazons"
          />
          <Box fullWidth gap={0} column>
            <H4 $withShadow>Amazons of Philo Islands</H4>
            <H4 $withShadow>status: development</H4>
            <Body $withShadow $size="xsm">
              Contact us for Collaboration
            </Body>
            <Button
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              variant="2"
            >
              Contact
            </Button>
          </Box>
        </ProjectWrap>

        <CarouselWrap column fullWidth>
          <CarouselHeadLine fullWidth column>
            <H2 id="gallery" $withShadow>
              Our games
            </H2>
            <Body $size="m">
              Our stories are based on logic and plot, but we always remember
              about romance.
            </Body>
          </CarouselHeadLine>
          <CarouselList
            className="carousel__list"
            onClick={(e) => {
              const target = e.target as HTMLElement
              const item = target.closest("[data-index]")
              if (item && "dataset" in item) {
                const dataset = (item as HTMLElement).dataset
                const index = dataset.index ? parseInt(dataset.index, 10) : null
                updatePosition(index !== null ? index : -2)
              }
            }}
          >
            {games.map((game, index) => (
              <li
                className={`carousel__item`}
                data-index={index - 2}
                data-pos={getPos(index - 2)}
                key={game.src}
              >
                <Image
                  quality={100}
                  src={game.src}
                  width={game.width}
                  height={game.height}
                  alt="game"
                />
              </li>
            ))}
            <LeftButton onClick={() => directionHandler("left")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <path
                  d="M9.63442 0.365983C9.86876 0.600393 10.0004 0.918278 10.0004 1.24973C10.0004 1.58119 9.86876 1.89907 9.63442 2.13348L3.44692 8.32098L9.63442 14.5085C9.86212 14.7442 9.98811 15.06 9.98526 15.3877C9.98242 15.7155 9.85095 16.029 9.61919 16.2608C9.38743 16.4925 9.07392 16.624 8.74617 16.6268C8.41843 16.6297 8.10267 16.5037 7.86692 16.276L0.79567 9.20473C0.561332 8.97032 0.429687 8.65244 0.429687 8.32098C0.429687 7.98953 0.561332 7.67164 0.79567 7.43723L7.86692 0.365983C8.10133 0.131644 8.41922 9.52742e-08 8.75067 9.92267e-08C9.08213 1.03179e-07 9.40001 0.131644 9.63442 0.365983Z"
                  fill="#A9AABF"
                />
              </svg>
            </LeftButton>
            <RightButton onClick={() => directionHandler("right")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <path
                  d="M9.63442 0.365983C9.86876 0.600393 10.0004 0.918278 10.0004 1.24973C10.0004 1.58119 9.86876 1.89907 9.63442 2.13348L3.44692 8.32098L9.63442 14.5085C9.86212 14.7442 9.98811 15.06 9.98526 15.3877C9.98242 15.7155 9.85095 16.029 9.61919 16.2608C9.38743 16.4925 9.07392 16.624 8.74617 16.6268C8.41843 16.6297 8.10267 16.5037 7.86692 16.276L0.79567 9.20473C0.561332 8.97032 0.429687 8.65244 0.429687 8.32098C0.429687 7.98953 0.561332 7.67164 0.79567 7.43723L7.86692 0.365983C8.10133 0.131644 8.41922 9.52742e-08 8.75067 9.92267e-08C9.08213 1.03179e-07 9.40001 0.131644 9.63442 0.365983Z"
                  fill="#A9AABF"
                />
              </svg>
            </RightButton>
          </CarouselList>
          <Button variant="1">Play now</Button>
        </CarouselWrap>
      </TextWrap>
    </Wrap>
  )
})

export default Board
