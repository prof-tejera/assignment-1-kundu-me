import { useState, useEffect } from 'react';

import DisplayTime from "../generic/DisplayTime";
import DisplayRound from "../generic/DisplayRound";
import Button from "../generic/Button";

const XY = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [totalRound, setTotalRound] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [totalcountdown, setTotalCountdown] = useState(0);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);

  const [pauseButtonDisplayName, setPauseButtonDisplayName] = useState('Pause');
  const [pauseButtonValue, setPauseButtonValue] = useState('Pause');

  const [inputType, setInputType] = useState('');
  const [countdownValue, setCountdownValue] = useState(0);
  const [roundValue, setRoundValue] = useState(0);

  useEffect(() => {
    if (!stop) {
      if (countdown > 0) {
        setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1);
      }
      if (countdown === 0 && currentRound < totalRound) {
        setCurrentRound(currentRound + 1);
        setCountdown(totalcountdown);
      }
    }
	}, [countdown, start, stop]);

  const handleXYClick = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value === 'Reset') {
      setInputType('');
      setCountdownValue(0);
      setRoundValue(0);
      setCountdown(0);
      setTotalCountdown(0);
      setCurrentRound(0);
      setTotalRound(0);
      setStart(false);
      setStop(false);
      setPauseButtonDisplayName('Pause');
      setPauseButtonValue('Pause');
    } else if (value === 'Start') {
      setCountdown(0);
      setTotalCountdown(countdownValue);
      setCurrentRound(0);
      setTotalRound(roundValue);
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
    if (inputType === 'Round') {
      setRoundValue(Number(event.target.value));
    } else {
      setCountdownValue((countdownValue * 10) + Number(event.target.value));
    }
  };

  const handleInputTypeClick = (event) => {
    setInputType(event.target.value);
  };

  return (
    <div>
      <div>
        <DisplayTime milliseconds={countdown} uservalue={countdownValue}></DisplayTime>
        <DisplayRound round={currentRound} total={totalRound} uservalue={roundValue}></DisplayRound>
      </div>
      <div style={{ display: "flex"}}>
        <Button displayName="Countdown" value="Countdown" onClick={handleInputTypeClick} />
        <Button displayName="Round" value="Round" onClick={handleInputTypeClick} />
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
        <Button displayName="Start" value="Start" onClick={handleXYClick} />
        <Button displayName={pauseButtonDisplayName} value={pauseButtonValue} onClick={handleXYClick} />
        <Button displayName="Stop" value="Stop" onClick={handleXYClick} />
        <Button displayName="Reset" value="Reset" onClick={handleXYClick} />
      </div>
    </div>
  );
};

export default XY;
