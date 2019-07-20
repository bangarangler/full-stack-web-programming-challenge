import React from 'react'

const RenameForm = ({ root }) => {
  console.log("root RenameForm: ", root)
  console.log("root RenameForm: ", root.factName)

  const submitNewName = (e) => {
    e.preventDefault();
    root.filter(node => {
      let name = node.factName;
      console.log("Name: " , name)
      return name;
    })
    //console.log("first map: ", root.filter(r => {
      //let name = r.factName;
      //console.log("is this name? ", name)
      //return name;
      //Object.values(r).map(name => console.log("Name: ", name))
    //})
    //)}
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
