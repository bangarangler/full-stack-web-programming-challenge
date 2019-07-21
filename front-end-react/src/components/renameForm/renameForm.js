import React from 'react'

const RenameForm = ({ factory }) => {
  console.log("root RenameForm: ", factory)

  const submitNewName = (e) => {
    console.log("name id: ", e.target.value)
    e.preventDefault();
    }

  return (
    <form>
    <input
    type="text"
    //placeholder={factoryName}
    //value={factoryName}
    //onChange={setFactoryName}
    />
    <button onClick={(e) => submitNewName(e)}>Update</button>
    </form>
  )
}

export default RenameForm;
