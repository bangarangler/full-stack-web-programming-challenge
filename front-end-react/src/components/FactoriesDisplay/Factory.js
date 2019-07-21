import React, { useState } from 'react'

import RenameForm from '../renameForm/renameForm.js';

import styles from './Factory.module.scss';

const Factory = ({ factory, root, setRoot }) => {
  const [showForm, setShowForm] = useState(false)
  console.log("Factory: ", factory)

  const removeFactory = (e, id) => {
    e.preventDefault();
    console.log(id)
    let keptFacts = []
      root.filter(node => {
        console.log("node: ", node)
        if (node._id !== factory._id) {
          keptFacts.push(node)
          //console.log("keptFacts: ", keptFacts)
        }
        //return keptFacts
        setRoot(keptFacts)
        return null
      })
  }

  return (
    <div className={styles.Wrapper}>
    <div className={styles.Display} >
    <p className={styles.Name}><span onClick={(e) => removeFactory(e, factory._id)}>X</span>&nbsp; Factory Name: &nbsp; {factory.factName}<span onClick={() => setShowForm(!showForm)}>^</span></p>
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
