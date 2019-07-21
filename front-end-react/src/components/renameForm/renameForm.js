import React, { useState, useEffect } from 'react'

import useFormState from '../../hooks/useFormState.js';

const RenameForm = ({ factory, root, setRoot, showForm, setShowForm }) => {
  const [updateName, setUpdateName, resetUpdateName] = useFormState("")

  const submitNewName = (e, id) => {
    e.preventDefault();
    console.log("id: ", id)
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
      setShowForm(!showForm)
      return update
    })
    }
  console.log(root)
  useEffect(() => {
    setRoot(root)
  }, [submitNewName])

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
