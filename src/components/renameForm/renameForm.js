import React, { useEffect } from "react";

import axios from "axios";

import useFormState from "../../hooks/useFormState.js";

import styles from './renameForm.module.scss';

const RenameForm = ({ factory, root, setRoot, showForm, setShowForm }) => {
  const [updateName, setUpdateName] = useFormState("");

  const submitNewName = (e, ident) => {
    e.preventDefault();
    //console.log("ident: ", ident);
    let update;
    root.map(node => {
      //console.log("GROOT: ", node);
      if (node.ident === ident) {
        update = updateName;
        console.log(update);
        node.factName = update;
        //console.log("updated root?: ", root);
      }
      //setRoot(root)
      console.log("factory.ident", factory.ident)
      console.log("update: ", update)
      axiosUpdate(factory.ident, update);
      setShowForm(!showForm);
      return update;
    });
  };
  console.log(root);
  useEffect(() => {
    setRoot(root);
  }, [submitNewName]);

  const axiosUpdate = async (id, name) => {
    const data = {
      ident: id,
      newName: updateName
    };
    console.log("update data: ", data);
    //axios
      //.put("http://localhost:4000/update-factory", data)
      axios
      .put(
      "https://full-stack-web-challenge.herokuapp.com/update-factory", data
      )
      .then(res => {
        console.log(`res, ${res.data}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form className={styles.Form}>
      <input
        type="text"
        placeholder={factory.factName}
        name="update"
        value={updateName}
        onChange={setUpdateName}
      />
      <button onClick={e => submitNewName(e, factory.ident)}>Update</button>
    </form>
  );
};

export default RenameForm;
