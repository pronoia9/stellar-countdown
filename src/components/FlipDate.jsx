import React, { useRef, useEffect, useState } from 'react';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

import { getTargetDate } from '../utils/data';
import styled from 'styled-components';

export const FlipDate = ({ targetDate = getTargetDate() }) => {
  const [tickValue, setTickValue] = useState();
  const divRef = useRef(),
    tickRef = useRef();

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };
    Tick.DOM.create(divRef.current, { value: null, didInit });
    return () => Tick.DOM.destroy(tickRef.current);
  }, []);

  useEffect(() => {
    const counter = Tick.count.down(targetDate, {
      format: ['d', 'h', 'm', 's'],
    });
    counter.onupdate = (value) => {
      setTickValue(value.map((num) => (num < 10 ? `0${num}` : `${num}`)));
    };
    return () => {
      counter.timer?.stop();
    };
  }, []);

  useEffect(() => {
    if (tickRef.current) tickRef.current.value = tickValue;
  }, [tickValue]);

  return (
    <>
      <Container ref={divRef} className='tick'>
        <Wrapper data-repeat='true'>
          <Card data-view='flip' />
        </Wrapper>
      </Container>

      <TextContainer>
        <Text>Days</Text>
        <Text>Hours</Text>
        <Text>Minutes</Text>
        <Text>Seconds</Text>
      </TextContainer>
    </>
  );
};

const Container = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Card = styled.span`
  .flip,
  .tick-flip {
    margin: 0;
    border-radius: 0px;
  }
`;

const TextContainer = styled.div``;

const Text = styled.div`
  width: 100%;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  text-align: center;
  text-transform: uppercase;
`;
