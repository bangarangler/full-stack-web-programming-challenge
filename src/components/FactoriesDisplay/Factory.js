import React, { useState } from 'react'
import axios from 'axios'

import RenameForm from '../renameForm/renameForm.js';

import styles from './Factory.module.scss';

const Factory = ({ factory, root, setRoot }) => {
  const [showForm, setShowForm] = useState(false)
  console.log("Factory: ", factory)

  const removeFactory = (e, id) => {
    e.preventDefault();
    let keptFacts = []
      root.filter(node => {
        //console.log("node: ", node)
        if (node._id !== factory._id) {
          keptFacts.push(node)
          //console.log("keptFacts: ", keptFacts)
        }
        //return keptFacts
        setRoot(keptFacts)
        console.log('factoryID: ', factory._id)
        axiosRemove(factory._id)
        return null
      })
  }

  const axiosRemove = (id) => {
    console.log("axiosRemove id: ", id)
    const data = {_id: id}
    //axios.delete('http://localhost:4000/remove-factory', {data}).then(res => {
    axios.delete('https://full-stack-web-challenge.herokuapp.com/remove-factory',{crossdomain: true}, {data}).then(res => {
      console.log(`res: ${res.data}`)
    }).catch(err => {
      console.log(err)
    })
  }

  //useEffect(() => {
    //axiosRemove(id)
  //},[removeFactory])

  return (
    <div className={styles.Wrapper}>
    <div className={styles.Display} >
    <p className={styles.Name}><span onClick={(e) => removeFactory(e, factory._id)}>X</span>&nbsp; Factory Name: &nbsp; {factory.factName}<span onClick={() => setShowForm(!showForm)}>^</span></p>
    {showForm && <RenameForm factory={factory} root={root} setRoot={setRoot} showForm={showForm} setShowForm={setShowForm}  />}
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
