import React, { useRef, useEffect, useState } from 'react';
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

import { getTargetDate } from '../utils/data';

export const FlipDate = ({ value }) => {
  const divRef = useRef(),
    tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, { value, didInit });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const counter = Tick.count.down(getTargetDate(), {
      format: ['d', 'h', 'm', 's'],
    });

    // When the counter updates, update React's state value
    counter.onupdate = (value) => {
      setTickValue(value.map((val) => (val < 10 ? `0${val}` : `${val}`)));
    };

    return () => {
      counter.timer?.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) tickRef.current.value = tickValue;
  }, [tickValue]);

  return (
    <div ref={divRef} className='tick'>
      <div data-repeat='true'>
        <span data-view='flip' />
      </div>
    </div>
  );
};
