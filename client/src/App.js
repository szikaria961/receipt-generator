import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])
  return (
    <div className="App">Receipt Generator</div>
  );
}

export default App;
