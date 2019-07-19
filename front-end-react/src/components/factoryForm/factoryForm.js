import React, {useState} from 'react';

import useFormState from '../../hooks/useFormState.js';

import styles from './factoryForm.module.scss'

class Factory {
  constructor(name, children, lRange, hRange) {
    this.name = name;
    this.children = children;
    this.lRange = lRange;
    this.hRange = hRange;
  }
}

const FactoryForm = ({ generateFactory }) => {
  const [newFactory, setNewFactory] = useState({});
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
    let tempFact = {}
     tempFact = new Factory(factoryName, childrenGenerate, lowRange, highRange)
 console.log(tempFact)
    setNewFactory({...newFactory, tempFact})

    console.log('newFactory: ', newFactory)
    //console.log(
      //'factory name: ',
      //factoryName,
      //'Children to Generate: ',
      //childrenGenerate,
      //'Low Range: ',
      //lowRange,
      //'HighRange: ',
      //highRange,
    //);
    //reset()
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
    </form>
  );
};

export default FactoryForm;
