import styled, { keyframes } from 'styled-components';

const Card = ({ number, style, animation }) => (
  <div className={`${animation ? 'countdown-card ' : ''}${style}`}>
    <span>{number}</span>
  </div>
);

export default function CountdownCard({ number = '??', shuffle = false, label = 'TBD' }) {
  let numberBottom = `${parseInt(number) + 1}`.padStart(2, '0');

  return (
    <Container className='countdown-cards-container'>
      <Card number={number} style='countdown-card-upper' />
      <Card number={numberBottom} style='countdown-card-lower' />
      <Card number={shuffle ? numberBottom : number} style={shuffle ? 'fold' : 'unfold'} animation={true} />
      <Card number={!shuffle ? numberBottom : number} style={!shuffle ? 'fold' : 'unfold'} animation={true} />
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
  background-color: var(--color-fold-bg);
  border-radius: 0.5rem;
  box-shadow: 0 0.65rem var(--color-neutral-blackBlue);
  /* overflow: hidden; */
  perspective-origin: 50% 50%;
  perspective: 300px;

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
      z-index: 10 !important;
    }

    &.fold {
      top: 0%;
      align-items: flex-end;
      transform-origin: 50% 100%;
      transform: rotateX(0deg);
      z-index: 10 !important;
    }
  }

  .countdown-card-upper,
  .fold,
  .countdown-card-lower,
  .unfold {
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
    background-color: var(--color-fold-bg);
  }

  /********************   ANIMATION (START)   ********************/
  .fold {
    animation: ${fold} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    transform-style: preserve-3d;
  }

  .unfold {
    animation: ${unfold} 0.8s cubic-bezier(0.8, 0.8, 0.375, 1.275) 0s 1 normal forwards;
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
