import styled, { keyframes } from 'styled-components';

// function components
const AnimatedCard = ({ animation, digit }) => (
  <div className={`countdown-card ${animation}`}>
    <span>{digit}</span>
  </div>
);
const StaticCard = ({ position, digit }) => (
  <div className={position}>
    <span>{digit}</span>
  </div>
);

export default function CountdownCard({ digit = '??', shuffle = false, unit = '??', label = 'TBD' }) {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = parseInt(digit) + 1;

  // to prevent a negative value
  if (unit !== 'hours') previousDigit = previousDigit === -1 ? 59 : previousDigit;
  else previousDigit = previousDigit === -1 ? 23 : previousDigit;

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <Container className='countdown-cards-container'>
      <StaticCard position={'countdown-card-upper'} digit={currentDigit} />
      <StaticCard position={'countdown-card-lower'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <Text>{label}</Text>
    </Container>
  );
}

const fold = keyframes`
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(-180deg); }
`;

const unfold = keyframes`
  0% { transform: rotateX(180deg); }
  100% { transform: rotateX(0deg); }
`;

const Container = styled.div`
  display: block;
  position: relative;
  width: clamp(4.375rem, 11vw, 9.25rem);
  height: clamp(4.125rem, 11vw, 8.625rem);
  max-width: 100%;
  margin: 0 1rem;
  /* padding: 1.5rem 0.8rem; */
  background-color: hsl(233, 23%, 21%);
  border-radius: 0.5rem;
  box-shadow: 0 0.65rem var(--color-neutral-blackBlue);
  /* overflow: hidden; */
  perspective-origin: 50% 50%;
  perspective: 300px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  * {
    background-color: var(--color-neutral-blue);
  }

  .countdown-card-upper,
  .countdown-card-lower {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  .countdown-card-upper {
    align-items: flex-end;
  }

  .countdown-card-lower {
    align-items: flex-start;
  }

  .countdown-card {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    backface-visibility: hidden;

    &.unfold {
      top: 50%;
      align-items: flex-start;
      transform-origin: 50% 0%;
      transform: rotateX(180deg);
      /* border: 0.5px solid yellow; */
      /* border-top: 0.5px solid red; */
      z-index: 10 !important;
    }

    &.fold {
      top: 0%;
      align-items: flex-end;
      transform-origin: 50% 100%;
      transform: rotateX(0deg);
      /* border: 0.5px solid green; */
      /* border-bottom: 0.5px solid blue; */
      z-index: 10 !important;
    }
  }

  .countdown-card-upper,
  .fold,
  .countdown-card-lower,
  .unfold {
    /* padding: 1.5rem 0.8rem; */
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .countdown-card-upper,
  .fold {
    width: 100%;
    height: 50%;
    inset: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    span {
      transform: translateY(50%);
    }

    /* Circle on the left and right sides */
    &::before,
    &::after {
      bottom: -0.5rem;
      z-index: -99;
    }
  }

  .countdown-card-lower,
  .unfold {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-bottom: 1.5rem;
    background-color: var(--color-neutral-blue);

    span {
      transform: translateY(-50%);
    }

    /* Circle on the left and right sides */
    &::before,
    &::after {
      top: -0.5rem;
      z-index: -99;
    }
  }

  /* Circle on the left and right sides */
  .countdown-card-lower,
  .unfold,
  .countdown-card-upper,
  .fold {
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--color-neutral-blackBlue);
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      right: -0.5rem;
      z-index: 1;
    }

    &::after {
      left: -0.5rem;
      z-index: 1;
    }
  }

  /* Background color for the top cards */
  .countdown-card-upper,
  .countdown-card-upper span,
  .fold,
  .fold span {
    background-color: hsl(233, 23%, 21%);
  }

  /********************   ANIMATION (START)   ********************/
  .fold {
    animation: ${fold} 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    transform-style: preserve-3d;
  }

  .unfold {
    animation: ${unfold} 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    transform-style: preserve-3d;
  }
  /*********************   ANIMATION (END)   *********************/

  span {
    font-size: clamp(2.25rem, 7vw, 5rem);
    color: var(--color-primary-red);
    letter-spacing: normal;
  }
`;

const Text = styled.p`
  background: none;
  width: 100%;
  position: absolute;
  bottom: -3.5rem;
  color: var(--color-primary-blue);
  font-size: clamp(0.5rem, 1.1vw, 0.875rem);
  letter-spacing: clamp(2px, 0.45vw, 0.5rem);
  text-align: center;
  text-transform: uppercase;
`;
