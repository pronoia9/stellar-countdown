import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import CountdownCard from './CountdownCard';
import { getTargetDate } from '../utils/data';

const Countdown = () => {
  const targetDate = getTargetDate();
  const [countdown, setCountdown] = useState(calculateCountdown());
  const interval = useRef();

  function calculateCountdown() {
    const time = +targetDate - +new Date();
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    };
  }

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <Container>
      {Object.values(countdown).map((data, index) => (
        <CountdownCard key={`${Object.keys(countdown)[index]}-card`} number={data} type={Object.keys(countdown)[index]} />
      ))}
    </Container>
  );
};
export default Countdown;

//countdown__container
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-width: clamp(20.625rem, 51vw, 43rem);
`;
