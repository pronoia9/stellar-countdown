import './App.scss';
import Header from './Header/Header';
import Countdown from './Countdown/Countdown';
import Logos from './Logos/Logos';
import Background from './Background/Background';

export default function App() {
  return (
    <div className=''>
      <Header title={`We're launching soon`.toUpperCase()} />
      <Countdown />
      <Logos />
      <Background />
    </div>
  );
}