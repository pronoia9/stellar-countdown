import './App.scss';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import Logos from './Logos/Logos';
import Background from './Background/Background';

export default function App() {
  return (
    <div className=''>
      <Header title={`We're launching soon`.toUpperCase()} />
      <Cards />
      <Logos />
      <Background />
    </div>
  );
}