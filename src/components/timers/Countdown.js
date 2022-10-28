import { useState, useEffect } from 'react';

import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";

const Countdown = () => {
  const [countdown, setCountdown] = useState(0);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);

  const [pauseButtonDisplayName, setPauseButtonDisplayName] = useState('Pause');
  const [pauseButtonValue, setPauseButtonValue] = useState('Pause');

  const [countdownValue, setCountdownValue] = useState(0);

  useEffect(() => {
    if (!stop && countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1);
    }
	}, [countdown, start, stop]);

  const handleCountdownClick = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value === 'Reset') {
      setCountdownValue(0);
      setCountdown(0);
      setStart(false);
      setStop(false);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    } else if (value === 'Start') {
      setCountdown(countdownValue);
      setStart(true);
      setStop(false);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    } else if (value === 'Stop') {
      setStop(true);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    }  else if (value === 'Pause') {
      setStop(true);
      setPauseButtonDisplayName('Resume');
      setPauseButtonValue('Resume');
    }  else if (value === 'Resume') {
      setStop(false);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    } else {
      // Error
      console.log("Error");
    }
  };

  const handleNumberClick = (event) => {
    setCountdownValue((countdownValue * 10) + Number(event.target.value));
  };

  return (
    <div>
      <div>
        <DisplayTime milliseconds={countdown} uservalue={countdownValue}></DisplayTime>
      </div>
      <div style={{ display: "flex"}}>
        <Button displayName="1" value="1" onClick={handleNumberClick} />
        <Button displayName="2" value="2" onClick={handleNumberClick} />
        <Button displayName="3" value="3" onClick={handleNumberClick} />
        <Button displayName="4" value="4" onClick={handleNumberClick} />
        <Button displayName="5" value="5" onClick={handleNumberClick} />
        <Button displayName="6" value="6" onClick={handleNumberClick} />
        <Button displayName="7" value="7" onClick={handleNumberClick} />
        <Button displayName="8" value="8" onClick={handleNumberClick} />
        <Button displayName="9" value="9" onClick={handleNumberClick} />
        <Button displayName="0" value="0" onClick={handleNumberClick} />
      </div>
      <div style={{ display: "flex"}}>
        <Button displayName="Start" value="Start" onClick={handleCountdownClick} />
        <Button displayName={pauseButtonDisplayName} value={pauseButtonValue} onClick={handleCountdownClick} />
        <Button displayName="Stop" value="Stop" onClick={handleCountdownClick} />
        <Button displayName="Reset" value="Reset" onClick={handleCountdownClick} />
      </div>
    </div>
  );
};

export default Countdown;
