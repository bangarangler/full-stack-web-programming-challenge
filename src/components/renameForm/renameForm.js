import React, { useEffect } from "react";

import axios from "axios";

import useFormState from "../../hooks/useFormState.js";

import styles from './renameForm.module.scss';

const RenameForm = ({ factory, root, setRoot, showForm, setShowForm }) => {
  const [updateName, setUpdateName] = useFormState("");

  const submitNewName = (e, ident) => {
    e.preventDefault();
    let update;
    root.map(node => {
      if (node.ident === ident) {
        update = updateName;
        node.factName = update;
      }
      axiosUpdate(factory.ident, update);
      setShowForm(!showForm);
      return update;
    });
  };
  useEffect(() => {
    setRoot(root);
  }, [submitNewName]);

  const axiosUpdate = async (id, name) => {
    const data = {
      ident: id,
      newName: updateName
    };
    // SWITCH FOR LOCAL TESTING
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
