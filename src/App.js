import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [clicksNumber, setClicksNumber] = useState(0);

  const driveClick = () => {
    setClicksNumber(clicksNumber + 1);
  };

  const eraseCounter = () => {
    setClicksNumber(0);

  };



  return (
    <div className='App'>
      <div className='title-container'>
        <h1> Clicks Counter App </h1>
      </div>
      <div className='main-container'>

        <Counter clicksNumber={clicksNumber} />

        <Button
          text='Click'
          isClickBtn={true}
          driveClick={driveClick} />



        <Button
          text='Erase'
          isClickBtn={false}
          driveClick={eraseCounter} />

      </div>
    </div>
  );
}

export default App;
