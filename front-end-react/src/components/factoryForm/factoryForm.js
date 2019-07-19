import React, {useState} from 'react';

import useFormState from '../../hooks/useFormState.js';

const FactoryForm = () => {
  const [factoryName, setFactoryName, resetFactoryName] = useFormState('');
  const [lowRange, setLowRange, resetLowRange] = useFormState('');
  const [highRange, setHighRange, resetHighRange] = useFormState('');
  const reset = () => {
    resetFactoryName();
    resetLowRange();
    resetHighRange();
  };
  const factoryAddHandler = e => {
    e.preventDefault();
    console.log(
      'factory name: ',
      factoryName,
      'Low Range: ',
      lowRange,
      'HighRange: ',
      highRange,
    );
    reset()
  };
  return (
    <form>
      <label htmlFor="factoryName">Factory Name</label>
      <input
        type="text"
        name="factoryName"
        value={factoryName}
        placeholder="Factory Name..."
        onChange={setFactoryName}
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
      <button type="submit" onClick={e => factoryAddHandler(e)}>
        Generate Factory
      </button>
    </form>
  );
};

export default FactoryForm;
