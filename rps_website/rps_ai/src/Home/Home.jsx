import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import RPSChoice from './RPSChoice/RPSChoice';

const Home = () => {

  const HomeContainer = styled.div`
    background-color: #76cdcd;
    height: 93vh;
    padding-top: 7vh;
    display: flex;
    order: 0;
    justify-content: center;
    /* justify-content: space-between;
    align-items: center;
    min-height: 5vh;
    padding-left: 30px;
    padding-right: 30px; */
  `;

  const RPSTitle = styled.h1`
    
  `

  const GameContainer = styled.div`
    
  `

  return (
    <HomeContainer>
      <RPSTitle>RPS Robot</RPSTitle>
      <GameContainer>
        <RPSChoice/>
      </GameContainer>
    </HomeContainer>
  )
}

export default Home