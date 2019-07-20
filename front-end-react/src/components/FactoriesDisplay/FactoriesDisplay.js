import React from 'react';

const FactoriesDisplay = ({ root }) => {
  return (
    <div>
    {root.map((factory, index) => {
      return (
        <div key={index}>
      <p>{factory.factName}</p>
        </div>
      )
    })}
    </div>
  )
}

export default FactoriesDisplay;
