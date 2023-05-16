import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { rem, getTargetDate, calculateCountdown } from '../utils/utils';
import { CountdownCard } from './';

const Countdown = () => {
  const [targetDate, setTargetDate] = useState(getTargetDate());
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown((prev) => {
        const update = calculateCountdown(targetDate, prev);
        return update;
      });
    }, 1000);
    return () => clearInterval(interval.current);
  }, [targetDate]);

  return (
    <Container>
      <Title>We're launching soon</Title>
      <Wrapper>
        {Object.keys(countdown.count).map((unit, index) => {
          return <CountdownCard key={`card-${unit}`} digit={countdown.count[unit]} shuffle={countdown.shuffle[unit]} label={unit} />;
        })}
      </Wrapper>
    </Container>
  );
};
export default Countdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  min-width: clamp(20.625rem, 51vw, 43rem);
`;

const Title = styled.h1`
  color: var(--color-neutral-white);
  text-transform: uppercase;
  text-align: center;
  font-size: ${rem(18)};
  letter-spacing: ${rem(5)};

  @media screen and (min-width: 1024px) {
    font-size: calc(${rem(18)}* 1.15);
    letter-spacing: calc(${rem(5)}* 1.75);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(15)};

  @media screen and (min-width: 1024px) {
    gap: calc(${rem(15)}*2);
  }

  @media screen and (min-width: 1440px) {
    gap: calc(${rem(15)} * 2.25);
  }
`;
