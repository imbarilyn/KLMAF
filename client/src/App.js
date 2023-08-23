import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    fetch("/hello")
    .then(res =>res.json())
    .then(res =>setCount(res.count))
  }, []);

  return (
    <div className="App">
      <h1>Body count: {count}</h1>
      
    </div>
  );
}

export default App;
