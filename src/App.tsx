import './App.scss';
import { useState } from 'react';
import Pew from './Component/Pew';

function App() {
  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      <Pew />
    </div>
  );
}

export default App;
