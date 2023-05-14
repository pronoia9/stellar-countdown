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
    <div className='tick'>
      <div data-repeat='true' data-layout='horizontal fit' className='tick-group'>
        <div ref={divRef}>
          <div>
            <span data-key='days' data-transform='pad(00)' data-view='flip' />
            <span className='tick-text-inline'>Days</span>
          </div>
          <div>
            <span data-key='hours' data-transform='pad(00)' data-view='flip' />
            <span className='tick-text-inline'>Hours</span>
          </div>
          <div>
            <span data-key='mins' data-transform='pad(00)' data-view='flip' />
            <span className='tick-text-inline'>Minutes</span>
          </div>
          <div>
            <span data-key='secs' data-transform='pad(00)' data-view='flip' />
            <span className='tick-text-inline'>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
