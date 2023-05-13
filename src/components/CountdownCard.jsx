import styled, { keyframes } from 'styled-components';

const CountdownCard = ({ number, type }) => {
  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
      <Text>{type}</Text>
    </Container>
  );
};

export default CountdownCard;

const Container = styled.div`
  height: clamp(4.125rem, 11vw, 8.625rem);
  width: clamp(4.375, 11vw, 9, 25rem);
  position: relative;
  perspective: 31.25rem;
  transform-style: preserve-3d;
  color: var(--color-primary-red);
  font-size: clamp(2.25rem, 7vw, 5rem);

  &::before {
    content: ${(props) => props.number};
    background-color: 'green'; /* #141419 */
    border-radius: 0.5rem;
    height: 100%;
    position: absolute;
    top: 6%;
    width: 100%;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  &::before {
    content: attr();
    z-index: 5;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const Text = styled.div`
  width: 100%;
  position: absolute;
  bottom: -3.5rem;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  text-align: center;
  text-transform: uppercase;
`;
