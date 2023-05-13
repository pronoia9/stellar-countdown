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

/* 
<div class='countdown__parent'>
    <div class='countdown__top'>
        <div></div>
    </div>
  
    <div class='countdown__bottom'></div>
  
    <p class='countdown__text'>days</p>
</div> 
*/

export default CountdownCard;

const Container = styled.div`
  color: var(--color-primary-red);
  font-size: clamp(2.25rem, 7vw, 5rem);
  height: clamp(4.125rem, 11vw, 8.625rem);
  perspective: 31.25rem;
  position: relative;
  transform-style: preserve-3d;
  width: clamp(4.375, 11vw, 9, 25rem);

  &::before {
    content: '';
    background-color: #1a1a24; /* #141419 */
    border-radius: 0.5rem;
    height: 100%;
    position: absolute;
    top: 6%;
    width: 100%;
  }
`;

const Top = styled.div``;

const Bottom = styled.div``;

const Text = styled.div`
  bottom: -3.5rem;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;
