import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { kpiData } from "../data/kpiData"

function KpiSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <h2>Rate of Returning Visitors</h2>
          </Title>
          <Description>
            <p>Simply put, your RVR is how many repeat visitors you have.</p>
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default KpiSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div``

const TextWrapper = styled.div``

const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
