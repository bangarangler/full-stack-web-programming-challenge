import React, { useState } from 'react'

import RenameForm from '../renameForm/renameForm.js';

import styles from './Factory.module.scss';

const Factory = ({ factory }) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className={styles.Wrapper}>
    <div className={styles.Display} >
    <p className={styles.Name}><span>X</span>&nbsp; Factory Name: &nbsp; {factory.factName}<span onClick={() => setShowForm(!showForm)}>^</span></p>
    {showForm && <RenameForm factory={factory}  />}
    {factory.children.map((child, index) => {
      return (
        <div key={index} className={styles.flex}>
        <p className={styles.Children}>{child}</p>
        </div>
      )
    })}
    </div>
    </div>
  )
}

export default Factory;
