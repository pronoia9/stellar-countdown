import React, { useRef, useEffect } from 'react';

import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

export const Flip = ({ value }) => {
  const divRef = useRef(),
    tickRef = useRef();

  useEffect(() => {
    const currDiv = divRef.current;

    const didInit = (tick) => {
      tickRef.current = tick;
    };

    Tick.DOM.create(currDiv, {
      value,
      didInit,
      repeat: true,
      view: {
        children: [
          {
            root: 'div',
            style: '.tick',
            repeat: true,
            children: [
              {
                view: 'flip',
              },
            ],
          },
        ],
      },
    });

    const tickValue = tickRef.current;

    return () => Tick.DOM.destroy(tickValue);
  });

  useEffect(() => {
    if (tickRef.current) tickRef.current.value = value;
  }, [value]);

  return <div ref={divRef} />;
};
