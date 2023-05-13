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
  height: 100vh;
  background: url(/pattern-hills.svg) bottom center no-repeat, url(/bg-stars.svg) no-repeat, linear-gradient(to bottom, #1e1f29, #231d2b);
`;

const Title = styled.h1`
  h1 {
    font-size: 1.0625rem;
    text-transform: uppercase;
  }
`;
