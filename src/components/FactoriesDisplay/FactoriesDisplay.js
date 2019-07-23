import React, {  useEffect } from 'react';

import Factory from './Factory.js';

const FactoriesDisplay = ({ root, data, setRoot }) => {

  useEffect(() => {
    if (data === undefined) {
      return
    } else {
      setRoot(data)
    }
  },[data])

  return (
    <div>
    {root.map((factory, index) => {
      return (
        <Factory key={index} setRoot={setRoot} root={root} factory={factory} />
      )
    })}
    </div>
  )
}

export default FactoriesDisplay;
