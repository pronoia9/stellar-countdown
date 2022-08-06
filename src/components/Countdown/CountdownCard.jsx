import './CountdowdCard.scss';

// function components
const AnimatedCard = ({ animation, digit }) => <div className={`countdown-card ${animation}`}><span>{digit}</span></div>;
const StaticCard = ({ position, digit }) => <div className={position}><span>{digit}</span></div>;

export default function CountdownCard({ digit, shuffle, unit, label }) {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit + 1;

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
    <div className='countdown-cards-container'>
      <StaticCard position={'countdown-card-upper'} digit={currentDigit} />
      <StaticCard position={'countdown-card-lower'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <p>{label}</p>
    </div>
  );
}