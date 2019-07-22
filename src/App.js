import React, { useState } from 'react';

import useGetFactories from './hooks/useGetFactories.js'

import FactoryForm from './components/factoryForm/factoryForm.js';
import FactoriesDisplay from './components/FactoriesDisplay/FactoriesDisplay.js';
import Spinner from './components/Spinner/Spinner.js'

import './App.scss';
import './SCSS/index.scss';

function App() {
  const { loading, data } = useGetFactories(
    //'http://localhost:4000/get-factory'
    'https://full-stack-web-challenge.herokuapp.com/get-factory'
  )
  console.log(data)
  const [root, setRoot] = useState([])
  //const [toggle, setToggle] = useState(false)

  const generateFactory = async (newFact) => {
    //console.log("From generateFactory: ", newFact)
    await setRoot([...root, newFact])
    console.log("root", root)
  }

  //useEffect(() => {
    //setRoot()
  //}, [root])

  console.log("root: ", root)
  return (
    <div className="App">
    <header className='heading'>
    <h1 className="headingTitle">Root</h1>
    </header>
    <main>
      <FactoryForm generateFactory={generateFactory} setRoot={setRoot} />
      <FactoriesDisplay root={root} data={data} setRoot={setRoot} />
    {loading && <Spinner />}
    </main>
    </div>
  );
}

export default App;
