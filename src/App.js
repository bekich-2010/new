import React, {useState} from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1)
  };
  return (
    <div className="App">
      <h1 className='heading'>{count}</h1>
      <div className="buttons">
        <button className="button" onClick={handleIncrement}>+</button>
        <button className="button" onClick={handleDecrement}>-</button>
      </div>
        <div>
            <h2 className="heading2">
                ЭТО КАУНТЕР
            </h2>
        </div>
    </div>
  );
}

export default App;
