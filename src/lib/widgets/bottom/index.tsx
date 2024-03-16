import { Body, H2, H3 } from "@/lib/ui/pirimitives/text"
import { memo } from "react"
import { styled } from "styled-components"
import Telegram from "./assets/telegram"
import Instagram from "./assets/instagram"
import Mail from "./assets/mail"
import { Box } from "@/lib/ui/pirimitives/box"
import { up } from "@/lib/ui/breakpoints"
import Image from "next/image"
import googlePlay from "./assets/google-play.png"
import appStore from "./assets/app-store.png"
import logo from "@/lib/ui/assets/logo.png"
import { inter } from "@/lib/ui/pirimitives/text/fonts"

const IconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 138px;
  margin-top: 25px;

  @media ${up("mobile")} {
    width: 174px;
    margin-top: 35px;
  }
`
const StyledBody = styled(Body)`
  margin-top: 20px;

  @media ${up("mobile")} {
    margin-top: 30px;
  }
`
const ImageBox = styled(Box)`
  margin-top: 288px;

  & > img {
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.07);
    }
  }

  @media ${up("mobile")} {
    margin-top: 833px;
  }
`
const VeryBottomText = styled.p`
  color: #ffffff80;
  margin-top: 12px;
  ${inter.style}
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  @media ${up("mobile")} {
    margin-top: 17px;
    font-size: 8px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
  }
`
const BottomText = styled.p`
  color: #ffffff80;
  ${inter.style}
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  @media ${up("mobile")} {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
  }
`
const BottomBox = styled(Box)`
  margin-top: 25px;
  @media ${up("mobile")} {
    flex-direction: row;
    margin-top: 25px;
  }
`
const LikeHeaderBox = styled(Box)`
  gap: 25px;
  margin-top: 145px;

  & > ${Box} {
    justify-content: space-evenly;
  }

  @media ${up("mobile")} {
    gap: 30px;
    margin-top: 335px;
  }
`
const Wrap = styled(Box)`
  padding: 60px 44px 8px 44px;
  margin: auto;

  @media ${up("mobile")} {
    max-width: 1500px;
    padding: 170px 44px 25px 44px;
  }
`
export const Bottom = memo(function Bottom() {
  return (
    <Wrap column fullWidth>
      <H2 id="contact">Lets keep in touch!</H2>
      <StyledBody $size="m">
        Contact us for any questions and collaborations:
      </StyledBody>
      <IconsWrap>
        <Telegram />
        <Instagram />
        <Mail />
      </IconsWrap>
      <ImageBox column gap={10}>
        <Image
          onClick={() =>
            window.open(
              "https://apps.apple.com/ru/app/series-%D1%81hoose-your-love-story/id1605587525?l=en-GB",
              "_blank",
            )
          }
          quality={100}
          src={appStore.src}
          width={appStore.width * 1.5}
          height={appStore.height * 1.5}
          alt="appStore"
        />
        <Image
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=novel.interactive.stories.life.simulator&pcampaignid=web_share",
              "_blank",
            )
          }
          quality={100}
          src={googlePlay.src}
          width={googlePlay.width * 1.5}
          height={googlePlay.height * 1.5}
          alt="googlePlay"
        />
      </ImageBox>

      <LikeHeaderBox fullWidth column>
        <Image
          quality={100}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt="logo sc-games"
        />
        <Box fullWidth>
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
      </LikeHeaderBox>
      <BottomBox column>
        <BottomText>Privacy notice and cookie statement</BottomText>
        <BottomText>Code of Conduct</BottomText>
        <BottomText>Terms & conditions</BottomText>
        <BottomText>Editorial Complaints Policy</BottomText>
        <BottomText>Manage Preferences</BottomText>
      </BottomBox>
      <VeryBottomText>@ 2024 Game. All Right Reserved</VeryBottomText>
    </Wrap>
  )
})
