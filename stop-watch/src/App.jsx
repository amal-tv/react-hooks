import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => {
        setTime((t) => t + 100);
      }, 100);
    } else {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [isRunning]);

  const formatTime = (timeInMilliseconds) => {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <p>Stopwatch</p>
      <div>{formatTime(time)}</div>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
