import styled from 'styled-components';

import { Countdown, Footer, Socials } from './components/';
import { rem } from './utils/utils';

const App = () => {
  return (
    <AppContainer>
      <Title>We're launching soon</Title>
      <Countdown />
      <Socials />
      {/* <Footer /> */}
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(/src/assets/pattern-hills.svg) no-repeat bottom center, url(/src/assets/bg-stars.svg) center center,
    linear-gradient(to bottom, var(--color-neutral-blackBlue), var(--color-bg-gradient));
  background-size: contain;
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  justify-items: center;
  padding: 8.5rem clamp(1.5rem, 5vw, 5rem) 2rem;
`;

const Title = styled.h1`
  color: var(--color-neutral-white);
  text-transform: uppercase;
  font-size: clamp(${rem(20)}, 2.5vw, 1.375rem);
  letter-spacing: 0cap.5rem;
  text-align: center;
`;
