import styled from 'styled-components';
import CountdownCard from './CountdownCard';

const Countdown = () => {
  return (
    <Container>
      {[8, 23, 55, 41].map((data, index) => (
        <CountdownCard key={`${['day', 'hour', 'minute', 'second'][index]}-card`} number={data} />
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
