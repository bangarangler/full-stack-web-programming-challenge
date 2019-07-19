import React, { useState } from 'react';

import FactoryForm from './components/factoryForm/factoryForm.js';

import './App.scss';
import styles from './SCSS/index.scss';

function App() {
  const [root, setRoot] = useState(
    {
      name: 'root',
      factories: []
    }
  )

  const generateFactory = (newFact) => {
    setRoot(newFact)
  }
  return (
    <div className="App">
    <header className='heading'>
    <h1 className="headingTitle">{root.name}</h1>
    </header>
    <main>
      <FactoryForm generateFactory={generateFactory} />
    </main>
    </div>
  );
}

export default App;
