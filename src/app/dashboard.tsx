"use client"

import Header from "@/lib/widgets/header"
import { memo } from "react"
import { createGlobalStyle } from "styled-components"
import background from "@/lib/ui/assets/background.png"
import background2 from "@/lib/ui/assets/background-2.png"
import background3 from "@/lib/ui/assets/background-3.png"
import { MainWrap, Section } from "@/lib/widgets/layout"
import Face from "@/lib/widgets/face"
import Image from "next/image"
import Board from "@/lib/widgets/board"
import { Bottom } from "@/lib/widgets/bottom"

const GlobalStyles = createGlobalStyle`
    body, h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        margin-block: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        color: white;
    }
`

export const Dashboard = memo(function Dashboard() {
  return (
    <>
      <GlobalStyles />
      <MainWrap>
        <Header />
        <Image
          quality={100}
          style={{ zIndex: "-1", objectFit: "cover" }}
          fill
          src={background.src}
          alt="background head"
        />
        <Section>
          <Face />
        </Section>
      </MainWrap>
      <MainWrap>
        <Image
          quality={100}
          style={{ zIndex: "-1", objectFit: "cover" }}
          fill
          src={background2.src}
          alt="background content"
        />
        <Section>
          <Board />
        </Section>
      </MainWrap>
      <MainWrap>
        <Image
          quality={100}
          style={{ zIndex: "-1", objectFit: "cover" }}
          fill
          src={background3.src}
          alt="background footer"
        />
        <Section>
          <Bottom />
        </Section>
      </MainWrap>
    </>
  )
})

export default Dashboard
