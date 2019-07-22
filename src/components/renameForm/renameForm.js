import React, {  useEffect } from 'react'

import axios from 'axios'

import useFormState from '../../hooks/useFormState.js';

const RenameForm = ({ factory, root, setRoot, showForm, setShowForm }) => {
  const [updateName, setUpdateName] = useFormState("")

  const submitNewName = (e, id) => {
    e.preventDefault();
    //console.log("id: ", id)
    let update;
    root.map(node => {
      //console.log(node.factName)
      if (node._id === id) {
        update = updateName
        console.log(update)
        node.factName = update
        console.log("updated root?: ", root)
      }
      //setRoot(root)
      axiosUpdate(id, update)
      setShowForm(!showForm)
      return update
    })
    }
  console.log(root)
  useEffect(() => {
    setRoot(root)
  }, [submitNewName])

 const axiosUpdate = (id, name) => {
   const data = {
    _id: id,
     newName: updateName
   }
   console.log("update data: ", data)
   //axios.put('http://localhost:4000/update-factory', data).then(res => {
   axios.put('https://full-stack-web-challenge.herokuapp.com/update-factory', data).then(res => {
     console.log(`res, ${res.data}`)
   }).catch(err => {
     console.log(err)
   })
  }

  return (
    <form>
    <input
    type="text"
    placeholder={factory.factName}
    name="update"
    value={updateName}
    onChange={setUpdateName}
    />
    <button onClick={(e) => submitNewName(e, factory._id)}>Update</button>
    </form>
  )
}

export default RenameForm;
