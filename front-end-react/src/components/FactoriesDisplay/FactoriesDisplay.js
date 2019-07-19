import React from 'react';

const FactoriesDisplay = ({ root }) => {
  return (
    <div>
    {root.map(r => {
      return Object.values(r).map((fact, index) => {
        console.log("Fact: ", fact.factName)
        return (
          <div key={index}>
        <h3>{fact.factName}</h3>
          <p>{fact.childGen}</p>
          </div>
          )
      })
    })}
    </div>
  )
}

export default FactoriesDisplay;
