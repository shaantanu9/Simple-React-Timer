import { useState, useEffect } from "react";

//import {useState, useEffect,useRef} from 'react'
//import Timer from './components/Timer'
const Timer = (props) => {
  let [Timer, setTimer] = useState(0);

  useEffect(() => {}, []);
  var tt;
  const onClickTimer = () => {
    console.log(Timer);
    tt = setInterval(() => {
      setTimer((Timer -= 1));
      if (Timer === 0) {
        clearInterval(tt);
      }
    }, 1000);
    //if not empty then add
    // if(Timer!=='') setTimer()
  };
  if (Timer === 0) {
    clearInterval(tt);
  }

  const onClickTimer1second = () => {
    setTimer((Timer += 1));
  };
  const onClickTimerStop = () => {
    clearInterval(tt);
    setTimer(0);
    clearInterval(tt);
  };
  const onChangeTimer = (e) => setTimer(e.target.value);
  return (
    <>
      <input
        placeholder="Enter Time to Start Timer"
        onChange={onChangeTimer}
        type="number"
        name="number"
        id="number"
      />
      <br />
      <br />
      <button onClick={onClickTimer}>Start Timer Form </button>
      <button onClick={onClickTimer1second}>Add 1Second </button>
      <button onClick={onClickTimerStop}>Stop Timer</button>
      <p>{Timer}</p>
    </>
  );
};

export default Timer;
