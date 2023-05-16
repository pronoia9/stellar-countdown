import styled from 'styled-components';

import { Countdown, Footer } from './components/';
import { stars, hills } from './assets';

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Countdown />
        <Footer />
      </Wrapper>
    </Container>
  );
};
export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${stars}) center center, linear-gradient(to bottom, var(--color-neutral-blackBlue), var(--color-bg-gradient));
  background-size: contain;
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  font-weight: var(--font-weight);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${hills}) no-repeat bottom center;
  background-size: contain;
  /* padding: 8.5rem clamp(1.5rem, 5vw, 5rem) 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-items: center;
  padding-bottom: 0.75rem;
`;
