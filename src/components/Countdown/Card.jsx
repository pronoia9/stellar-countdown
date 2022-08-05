import './Card.scss';

export default function Card({ time, countdown }) {
  return (
    <div className='card-flip'>
      <span className='card-number'>
        <span className='card-number-top' />
        {countdown}
      </span>
      <p>{time}</p>
    </div>
  );
}