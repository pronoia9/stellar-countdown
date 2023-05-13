import styled from 'styled-components';

import { Countdown, Footer, Socials } from './components/';

const App = () => {
  return (
    <AppContainer>
      <Title>We're launching soon</Title>
      <Countdown />
      <Socials />
      <Footer />
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(/pattern-hills.svg) no-repeat bottom center, url(/bg-stars.svg) center center, linear-gradient(to bottom, #1e1f29, #241c2b);
  background-size: contain;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-rows: repeat(3, auto);
`;

const Title = styled.h1`
  h1 {
    font-size: 1.0625rem;
    text-transform: uppercase;
  }
`;
