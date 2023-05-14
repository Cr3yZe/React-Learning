import React, { useState, useCallback } from 'react';


import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [textState, changeTextState] = useState(false);
  const [allowToggleState, changeAllowToggleState] = useState(false);

  console.log('APP log');

  const clickHandler = useCallback(() => {
    if (allowToggleState) {
      changeTextState(prevTextState => !prevTextState)
    } else {
      console.error('Toggle is not allowed!');
    }
  }, [allowToggleState]);

  const allowClickHandler = () => {
    changeAllowToggleState(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowClickHandler}>Allow Click!</Button>
      <Button onClick={clickHandler}>Click!</Button>
      <DemoOutput show={false}/>
    </div>
  );
}

export default App;
