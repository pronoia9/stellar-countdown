import styled from 'styled-components';

import { Footer } from './components/';

const App = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <Title></Title>
        <ContentWrapper></ContentWrapper>
      </ContentContainer>
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

const ContentContainer = styled.div``;

const Title = styled.div``;

const ContentWrapper = styled.div``;
