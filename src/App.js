import logo from './logo.svg';
import './App.css';
import Intro from './compnents/anims/Intro';
import Portfolio from './compnents/Portfolio';

import { Tween, Timeline } from 'react-gsap';

const App = () => {

  return (
    <>
      <Intro/>
      <Portfolio/>
    </>
  );
}

export default App;
