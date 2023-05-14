import styled from 'styled-components';

import { Countdown, Footer, Socials } from './components/';
import { rem } from './utils/utils';

const App = () => {
  return (
    <AppContainer>
      <Countdown />
      <Footer />
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8.5rem clamp(1.5rem, 5vw, 5rem) 0.5rem;
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  font-weight: var(--font-weight);
`;
