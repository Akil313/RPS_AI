import React from 'react'
import styled, { ThemeProvider } from "styled-components";

const ChoiceContainer = styled.div`
  
`

const ChoiceImg = styled.img`
`

const RPSChoice = () => {
  return (
    <ChoiceContainer>
      <ChoiceImg src={`../../Media/paper.png`} />
    </ChoiceContainer>
  )
}

export default RPSChoice