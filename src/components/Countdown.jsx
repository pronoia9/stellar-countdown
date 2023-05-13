import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CountdownCard from './CountdownCard';
import { getTargetDate } from '../utils/data';

const Countdown = () => {
  const [date, setDate] = useState(null);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => setDate(getTargetDate()), []);

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
