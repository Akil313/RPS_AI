import React from 'react'
import styled, { ThemeProvider } from "styled-components";

const Navbar = () => {

  const NavBarContainer = styled.div`
    background-color: #000;
    height: 7vh;
    width: 100vw;
    display: flex;
    opacity: 0.3;
    position: absolute;
    order: 1;
    /* justify-content: space-between;
    align-items: center;
    min-height: 5vh;
    padding-left: 30px;
    padding-right: 30px; */
  `;

  return (
    <NavBarContainer>
       
    </NavBarContainer>
  )
}

export default Navbar