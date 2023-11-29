import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  const serverData = async () => {
    try {
      const res = await fetch('/cart');
      const result = await res.text();
      console.log("result", result);
      setData(result);
    } catch (error) {
      console.log("error");
    };
  };

  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => serverData()}>
        Test
      </header>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
