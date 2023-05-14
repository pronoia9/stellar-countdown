import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Tick from '@pqina/flip';
import { rem } from '../utils/utils';

export default function CountdownCards ({ targetDate })  {
  const [tickValue, setTickValue] = useState(targetDate);
  const divRef = useRef(), tickRef = useRef();

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => { tickRef.current = tick; };
    Tick.DOM.create(divRef.current, { value: targetDate, didInit, });
    return () => Tick.DOM.destroy(tickRef.current);
  }, [targetDate]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(targetDate, { format: ['d', 'h', 'm', 's'], });
    // When the counter updates, update React's state value
    counter.onupdate = function (value) { setTickValue(value); };
    return () => { counter?.timer?.stop(); };
  }, [targetDate]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = { days: tickValue[0], hours: tickValue[1], mins: tickValue[2], secs: tickValue[3], };
    }
  }, [tickValue]);

  return (
    <LeSigh className='LeSigh tick'>
      <CountdownContainer className='CountdownContainer tick-group' data-repeat='true' data-layout='horizontal fit'>
        <CountdownWrapper ref={divRef} className='CountdownWrapper'>
          {[['days'], ['hours'], ['mins', 'minutes'], ['secs', 'seconds']].map((data, i) => (
            <CardContainer className='CardContainer' key={`card-${data[0]}`}>
              <Card className='Card' data-key={data[0]} data-transform='pad(00)' data-view='flip' />
              <Text className='Text tick-text-inline'>{data[1] || data[0]}</Text>
            </CardContainer>
          ))}
        </CountdownWrapper>
      </CountdownContainer>
    </LeSigh>
  );
};

const LeSigh = styled.div`
  width: 100%;
`;

const CountdownContainer = styled.div`
  width: 100%;
`;

const CountdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${rem(15)};
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.span``;

const Text = styled.span`
  width: 100%;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  text-align: center;
  text-transform: uppercase;
`;