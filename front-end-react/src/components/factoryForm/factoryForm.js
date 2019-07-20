import React, {useState, useEffect, useRef} from 'react';

import useFormState from '../../hooks/useFormState.js';

import styles from './factoryForm.module.scss'

const FactoryForm = ({ generateFactory }) => {
  const [message, setMessage] = useState(null)
  const [factoryName, setFactoryName, resetFactoryName] = useFormState('');
  const [childrenGenerate, setChildrenGenerate, resetChildrenGenerate] = useFormState("")
  const [lowRange, setLowRange, resetLowRange] = useFormState('');
  const [highRange, setHighRange, resetHighRange] = useFormState('');
  const reset = () => {
    resetFactoryName();
    resetChildrenGenerate();
    resetLowRange();
    resetHighRange();
  };

  const factoryAddHandler = e => {
    e.preventDefault();
    if (childrenGenerate > 15) {
      setMessage("Sorry 15 is the limit!")
    } else {
    //let tempFact = {}
    let tempFact = {factName: factoryName, childGen: childrenGenerate, lRange: lowRange, hRange: highRange}
        //setNewFactory([...newFactory, ...tempFact])
      setMessage(null)
      generateFactory(tempFact)
    //console.log('newFactory after: ', newFactory)
    reset()
      }
  };


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
