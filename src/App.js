import logo from './logo.svg';
import styled from 'styled-components';
import { ThemeContextProvider } from "./styles/ThemeContext";
import Header from './components/Header'
import TextGrid from './components/textgrid'
import KeyBoard from './components/keyboard'
import GlobalStyle from './styles/GlobalStyles'
import { useGridState, GridContextProvider } from './state/GridContent'
import React from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bg};
  padding: 0 10px 10px 10px;

  max-width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;
const InnerContainer = styled.div`
  width:100%;
 
`
function App() {



  return (
    <ThemeContextProvider>
      <GridContextProvider>
        <GlobalStyle />
        <Container>
          <Header />
          <TextGrid />
          <KeyBoard />
        </Container>
      </GridContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
