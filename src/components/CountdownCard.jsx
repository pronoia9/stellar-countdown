import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import { Flip } from './Flip';
import { updateCountdown } from '../utils/utils';

const CountdownCard = ({ targetDate, number, type }) => {
  const [count, setCount] = useState(number);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((count) => updateCountdown(targetDate, type));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <Container className='tick'>
      <Flip value={count} />
      <Text>{type}</Text>
    </Container>
  );
};

export default CountdownCard;

const Container = styled.div``;

const Wrapper = styled.div``;

const Text = styled.div`
  width: 100%;
  position: absolute;
  bottom: -3.5rem;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  text-align: center;
  text-transform: uppercase;
`;
