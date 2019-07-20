import React from 'react';

const FactoriesDisplay = ({ root }) => {
  return (
    <div>
    {root.map((factory, index) => {
      console.log("Fact: ", factory.children)
      console.log("Factory: ", factory.children.map(child => console.log(child)))
      })}
      })
    </div>
  )
}

export default FactoriesDisplay;
