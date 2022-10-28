import { useState, useEffect } from 'react';

import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";

const Stopwatch = () => {
  const [stopwatch, setStopwatch] = useState(0);
  const [countup, setCountup] = useState(0);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);

  const [pauseButtonDisplayName, setPauseButtonDisplayName] = useState('Pause');
  const [pauseButtonValue, setPauseButtonValue] = useState('Pause');

  const [stopwatchValue, setStopwatchValue] = useState(0);

  useEffect(() => {
    if (!stop && countup <  stopwatch) {
      setTimeout(() => {
        setCountup(countup + 1);
      }, 1);
    }
	}, [countup, stopwatch, start, stop]);

  const handleStopwatchClick = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value === 'Reset') {
      setStopwatchValue(0);
      setCountup(0);
      setStopwatch(0);
      setStart(false);
      setStop(false);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    } else if (value === 'Start') {
      setCountup(0);
      setStopwatch(stopwatchValue);
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
    setStopwatchValue((stopwatchValue * 10) + Number(event.target.value));
  };

  return (
    <div>
      <div>
        <DisplayTime milliseconds={countup} uservalue={stopwatchValue}></DisplayTime>
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
        <Button displayName="Start" value="Start" onClick={handleStopwatchClick} />
        <Button displayName={pauseButtonDisplayName} value={pauseButtonValue} onClick={handleStopwatchClick} />
        <Button displayName="Stop" value="Stop" onClick={handleStopwatchClick} />
        <Button displayName="Reset" value="Reset" onClick={handleStopwatchClick} />
      </div>
    </div>
  );
};

export default Stopwatch;
