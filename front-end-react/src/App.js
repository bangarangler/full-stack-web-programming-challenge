import React, { useState } from 'react';

import FactoryForm from './components/factoryForm/factoryForm.js';

import './App.scss';
import styles from './SCSS/index.scss';

class Factory {
  constructor(name, children, id) {
    this.name = name;
    this.children = children;
    this.id = id;
  }
}
function App() {
  const [root, setRoot] = useState(
    {
      name: 'root',
      factories: {
        factoryName: '',
        factoryChildren: []
      }
    }
  )
  return (
    <div className="App">
    <header className='heading'>
    <h1 className="headingTitle">{root.name}</h1>
    </header>
    <main>
      <FactoryForm />
    </main>
    </div>
  );
}

export default App;
