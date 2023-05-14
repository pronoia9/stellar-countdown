import styled from 'styled-components';

import { rem, getTargetDate } from '../utils/utils';
import { CountdownCards } from './';

const Countdown = () => {
  const targetDate = getTargetDate();

  return (
    <Container>
      <Title>We're launching soon</Title>
      <CountdownCards targetDate={targetDate.toISOString()} />
    </Container>
  );
};
export default Countdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
