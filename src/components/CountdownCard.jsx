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
  color: var(--color-primary-red);
  font-size: clamp(2.25rem, 7vw, 5rem);
  height: clamp(4.125rem, 11vw, 8.625rem);
  perspective: 31.25rem;
  position: relative;
  transform-style: preserve-3d;
  width: clamp(4.375, 11vw, 9, 25rem);
`;

const Top = styled.div``;

const Bottom = styled.div``;

const Text = styled.div``;
