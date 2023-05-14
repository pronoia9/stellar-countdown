import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

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
    <LeSigh className='tick'>
      <CountdownContainer data-repeat='true' data-layout='horizontal fit' className='tick-group'>
        <CountdownWrapper ref={divRef}>
          {[['days'], ['hours'], ['mins', 'minutes'], ['secs', 'seconds']].map((data, i) => (
            <CardContainer key={`card-${data[0]}`}>
              <Card data-key={data[0]} data-transform='pad(00)' data-view='flip' />
              <Text className='tick-text-inline'>{data[1] || data[0]}</Text>
            </CardContainer>
          ))}
        </CountdownWrapper>
      </CountdownContainer>
    </LeSigh>
  );
};

const LeSigh = styled.div``;

const CountdownContainer = styled.div``;

const CountdownWrapper = styled.div``;

const CardContainer = styled.div``;

const Card = styled.span``;

const Text = styled.span``;