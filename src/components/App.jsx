import './App.scss';
import Header from './Header/Header';
import Countdown from './Countdown/Countdown';
import Logos from './Logos/Logos';
import Background from './Background/Background';

export default function App() {
  const date = new Date(new Date().setSeconds(new Date().getSeconds() + (691200 + 82800 + 3300 + 44)));
  return (
    <div className=''>
      <Header title={`We're launching soon`.toUpperCase()} />
      <Countdown date={`${date.getDate()}, ${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()}`.split(',')} />
      <Logos />
      <Background />
    </div>
  );
}