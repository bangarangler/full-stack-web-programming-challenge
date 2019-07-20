import React, { useState } from 'react';

import RenameForm from '../renameForm/renameForm.js';

import styles from './FactoriesDisplay.module.scss';

const FactoriesDisplay = ({ root }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={styles.Wrapper}>
    {root.map((factory, index) => {
      console.log(factory.children.map(child => console.log(child)))
      return (
        <div className={styles.Display} key={index}>
        <p className={styles.Name}>Factory Name: &nbsp; {factory.factName}<span onClick={() => setShowForm(!showForm)}>^</span></p>
        {showForm && <RenameForm root={root} />}
        {factory.children.map((child, index) => {
          return (
            <div key={index} className={styles.flex}>
            <p className={styles.Children}>{child}</p>
            </div>
          )
        })}
        </div>
      )
    })}
    </div>
  )
}

export default FactoriesDisplay;
