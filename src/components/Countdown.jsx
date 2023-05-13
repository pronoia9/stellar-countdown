import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import CountdownCard from './CountdownCard';
import { getTargetDate } from '../utils/data';
import { calculateCountdown } from '../utils/utils';

const Countdown = () => {
  const targetDate = getTargetDate();
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  return (
    <Container>
      {Object.values(countdown).map((data, index) => (
        <CountdownCard targetDate={targetDate} key={`${Object.keys(countdown)[index]}-card`} number={data} type={Object.keys(countdown)[index]} />
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
