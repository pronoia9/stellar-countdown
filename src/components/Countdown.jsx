import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import CountdownCard from './CountdownCard';
import { getTargetDate } from '../utils/data';
import { calculateCountdown, rem } from '../utils/utils';

const Countdown = () => {
  const targetDate = getTargetDate();
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  return (
    <Container>
      <Title>We're launching soon</Title>
      <Wrapper>
        {Object.values(countdown).map((data, index) => (
          <CountdownCard targetDate={targetDate} key={`${Object.keys(countdown)[index]}-card`} number={data} type={Object.keys(countdown)[index]} />
        ))}
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: var(--color-neutral-white);
  text-transform: uppercase;
  font-size: clamp(${rem(20)}, 2.5vw, 1.375rem);
  letter-spacing: 0cap.5rem;
  text-align: center;
`;
