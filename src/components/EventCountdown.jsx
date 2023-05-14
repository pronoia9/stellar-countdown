import React, { useRef, useEffect, useState } from 'react';
import Tick from '@pqina/flip';

export const EventCountdown = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ['d', 'h', 'm', 's'],
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter?.timer?.stop();
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = {
        days: tickValue[0],
        hours: tickValue[1],
        mins: tickValue[2],
        secs: tickValue[3],
      };
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
