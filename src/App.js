import './App.css';
import Timer from './Timer';
import Button from './Button';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount]  = useState(0);
  const [min, setMin]  = useState(0);
  const [clicked, setClicked] = useState(false);

  const onStartHandler = () => {
    console.log('start');
    setClicked(true);
  }

  const onStopHandler = () => {
    console.log('stop');
    setClicked(false);
  }

  const onResetHandler = () => {
    console.log('Reset');
    setClicked(false);
    setCount(0);
    setMin(0);
  }

  useEffect(()=>{
    let timer;
    if(clicked){
      timer = setInterval(()=>{
        setCount(prev => prev +1);
      },1000)
    }
    return () => clearInterval(timer);
  },[clicked])

  useEffect(()=>{
    if(count%60 ===0 && count !==0){
      setMin(prev =>prev += 1);
      setCount(0);
    }
  },[count])
  

  return (
    <div className="App">
      <Timer sec= {count} min={min} /> 
      <Button name = "Start" onClickHandler={onStartHandler} />
      <Button name = "Stop" onClickHandler={onStopHandler} />
      <Button name = "Reset" onClickHandler={onResetHandler} />
    </div>
  );
}

export default App;
