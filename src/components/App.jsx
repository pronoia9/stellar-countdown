import './App.scss';
import Header from './Header/Header';
import Countdown from './Countdown/Countdown';
import Social from './Social/Social';
import Background from './Background/Background';

export default function App() {
  return (
    <>
      <Header title={`We're launching soon`.toUpperCase()} />
      <Countdown date={new Date(new Date().setSeconds(new Date().getSeconds() + (691200 + 82800 + 3300 + 44)))} />
      <Social />
      <Background />
    </>
  );
}