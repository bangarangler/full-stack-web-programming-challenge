import React, {useState} from 'react';
import axios from 'axios';
import {FaToggleOff, FaToggleOn} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';

import RenameForm from '../renameForm/renameForm.js';

import styles from './Factory.module.scss';

const Factory = ({factory, root, setRoot}) => {
  const [showForm, setShowForm] = useState(false);

  const removeFactory = (e, id) => {
    e.preventDefault();
    let keptFacts = [];
    root.filter(node => {
      if (node.ident !== factory.ident) {
        keptFacts.push(node);
      }
      setRoot(keptFacts);
      axiosRemove(factory.ident);
      return null;
    });
  };

  const axiosRemove = ident => {
    const data = {ident: ident};
    // SWITCH FOR LOCAL TESTING
    //axios.delete('http://localhost:4000/remove-factory', {data}).then(res => {
    axios
      .delete('https://full-stack-web-challenge.herokuapp.com/remove-factory', {
        data,
      })
      .then(res => {
        //console.log(`res: ${res.data}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Display}>
        <div className={styles.factoryNameContainer}>
          <p className={styles.Name}>
            <span onClick={e => removeFactory(e, factory._id)}>
              <IoMdClose className={styles.icons} />
            </span>
            &nbsp; Factory Name: &nbsp; {factory.factName} &nbsp;
            <span onClick={() => setShowForm(!showForm)}>
              {showForm === false ? (
                <FaToggleOff className={styles.icons} />
              ) : (
                <FaToggleOn className={styles.icons} />
              )}
            </span>
          </p>
        </div>
      </div>
      {showForm && (
        <RenameForm
          factory={factory}
          root={root}
          setRoot={setRoot}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
      {factory.children.map((child, index) => {
        return (
          <div key={index} className={styles.flex}>
            <p className={styles.Children}>{child}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Factory;
