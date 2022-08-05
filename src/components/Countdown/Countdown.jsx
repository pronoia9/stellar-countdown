import './Countdown.scss';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function Countdown({ date }) {
  const timeLeft = () => {
    const time = +date - +new Date();
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    };
  }

  const [countdown, setCountdown] = useState(timeLeft());

  return (
    <div className='countdown'>
      <p>{countdown.days}</p>
      <p>{countdown.hours}</p>
      <p>{countdown.minutes}</p>
      <p>{countdown.seconds}</p>
    </div>
  );
}