import React, { useState } from 'react';

import FactoryForm from './components/factoryForm/factoryForm.js';
import FactoriesDisplay from './components/FactoriesDisplay/FactoriesDisplay.js';

import './App.scss';
import styles from './SCSS/index.scss';

function App() {
  const [root, setRoot] = useState([])

  const generateFactory = async (newFact) => {
    //console.log("From generateFactory: ", newFact)
    await setRoot([...root, newFact])
    console.log("root", root)
  }

  console.log("root: ", root)
  return (
    <div className="App">
    <header className='heading'>
    <h1 className="headingTitle">Root</h1>
    </header>
    <main>
      <FactoryForm generateFactory={generateFactory} />
      <FactoriesDisplay root={root} />
    </main>
    </div>
  );
}

export default App;
