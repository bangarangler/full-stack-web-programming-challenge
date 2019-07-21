import React, { useState, useEffect } from 'react';

import RenameForm from '../renameForm/renameForm.js';
import Factory from './Factory.js';

import styles from './FactoriesDisplay.module.scss';

const FactoriesDisplay = ({ root, data, setRoot }) => {
  //console.log("data on display: ", data)

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
