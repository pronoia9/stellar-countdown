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
  };

  const [countdown, setCountdown] = useState(timeLeft());
  useEffect(() => { setTimeout(() => { setCountdown(timeLeft()); }, 1000); });

  return (
    <div className='countdown'>
      <Card time="days" countdown={countdown.days} />
      <Card time="hours" countdown={countdown.hours} />
      <Card time="minutes" countdown={countdown.minutes} />
      <Card time="seconds" countdown={countdown.seconds} />
    </div>
  );
}