import React, {useState, useEffect, useRef} from 'react';

import axios from 'axios'

import useFormState from '../../hooks/useFormState.js';

import styles from './factoryForm.module.scss'

const FactoryForm = ({ generateFactory, setRoot }) => {
  const [message, setMessage] = useState(null)
  const [factoryName, setFactoryName, resetFactoryName] = useFormState('');
  const [lowRange, setLowRange, resetLowRange] = useFormState('');
  const [highRange, setHighRange, resetHighRange] = useFormState('');
  const [childrenGenerate, setChildrenGenerate, resetChildrenGenerate] = useFormState([])
  const [children, setChildren] = useState([])
  //const [toggle, setToggle] = useState(false)
  //console.log("Ax: ", factoryName, childrenGenerate, lowRange, highRange, children)
  const reset = () => {
    resetFactoryName();
    resetChildrenGenerate();
    resetLowRange();
    resetHighRange();
  };

  //useEffect(() => {
    //postFact()
  //}, [highRange])

  const helperGenerator = (low, high) => {
    return Math.floor(Math.random() * (Number(high) - Number(low) + 1) + Number(low))
  }

  const randomNumberGenerator = () => {
  let numbers = new Array(Number(childrenGenerate));
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = helperGenerator(lowRange, highRange)
    console.log(numbers)
  }
    setChildren(numbers)
    return numbers
   //setChildren(numbers)
  }

  const factoryAddHandler = e => {
    e.preventDefault();
    if (childrenGenerate > 15) {
      setMessage("Sorry 15 is the limit!")
    } else {
    //let tempFact = {}
      const numberOfChildren = randomNumberGenerator()
      //console.log("children: ", children)
      let tempFact = {factName: factoryName, childGen: childrenGenerate, lRange: lowRange, hRange: highRange, children: numberOfChildren}
        //setNewFactory([...newFactory, ...tempFact])
      setMessage(null)
      generateFactory(tempFact)
    //console.log('newFactory after: ', newFactory)
      postFact(numberOfChildren)
    reset()
      }
  };

  const postFact = (numberOfChildren) => {
    console.log(factoryName, childrenGenerate, lowRange, highRange, children)
    axios.post('http://localhost:4000/add-factory', {
      factName: factoryName,
      childGen: childrenGenerate,
      lRange: lowRange,
      hRange: highRange,
      children: numberOfChildren
    }).then(async ( res ) => {
      console.log(res.data)
      await axios.get('http://localhost:4000/get-factory').then(res => {
        console.log("get log: ", res.data)
          setRoot(res.data)
      })
    }).catch(err => console.log(err))
  }

  //const renameFactory = () => {
    //setFactoryName(factoryName)
  //}


  return (
    <form className={styles.Form}>
      <label htmlFor="factoryName">Factory Name</label>
      <input
        type="text"
        name="factoryName"
        value={factoryName}
        placeholder="Factory Name..."
        onChange={setFactoryName}
      />
    <label htmlFor="childToGen">How many children should your Factory generate? (Limit 15)</label>
    <input
      type="text"
      name="childToGen"
      value={childrenGenerate}
      placeholder="Children to generate..."
      onChange={setChildrenGenerate}
    />
      <label htmlFor="lowRange">Low Range</label>
      <input
        type="text"
        name="lowRange"
        value={lowRange}
        placeholder="Low Range..."
        onChange={setLowRange}
      />
      <label htmlFor="highRange">High Range</label>
      <input
        type="text"
        name="highRange"
        value={highRange}
        placeholder="High Range..."
        onChange={setHighRange}
      />
      <button className={styles.GenerateBtn} type="submit" onClick={e => factoryAddHandler(e)}>
        Generate Factory
      </button>
      {message}
    </form>
  );
};

export default FactoryForm;
