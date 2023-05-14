import styled from 'styled-components';

import { FlipDate } from './FlipDate';
import { rem, getTargetDate } from '../utils/utils';

const Countdown = () => {
  return (
    <Container>
      <Title>We're launching soon</Title>
      <FlipDate targetDate={getTargetDate()} />
    </Container>
  );
};
export default Countdown;

//countdown__container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-width: clamp(20.625rem, 51vw, 43rem);
`;

const Title = styled.h1`
  color: var(--color-neutral-white);
  text-transform: uppercase;
  font-size: clamp(${rem(20)}, 2.5vw, 1.375rem);
  letter-spacing: 0.75rem;
  text-align: center;
`;
