import React, { useState } from "react";

import axios from "axios";
import uuid from "uuid/v4";

import useFormState from "../../hooks/useFormState.js";
import Message from './Message.js';

import styles from "./factoryForm.module.scss";

const FactoryForm = ({ generateFactory, setRoot }) => {
  const [message, setMessage] = useState(null);
  const [factoryName, setFactoryName, resetFactoryName] = useFormState("");
  const [lowRange, setLowRange, resetLowRange] = useFormState(undefined);
  const [highRange, setHighRange, resetHighRange] = useFormState(undefined);
  const [
    childrenGenerate,
    setChildrenGenerate,
    resetChildrenGenerate
  ] = useFormState(undefined);
  const [children, setChildren] = useState([]);
  const reset = () => {
    resetFactoryName();
    resetChildrenGenerate();
    resetLowRange();
    resetHighRange();
  };


  const helperGenerator = (low, high) => {
    // ACCEPTING HIGH AND LOW RANGE CONVERTING TO NUMBER
    // CALCULATING RANDOM SET OF RANGES BETWEEN HIGH AND LOW
    return Math.floor(
      Math.random() * (Number(high) - Number(low) + 1) + Number(low)
    );
  };

  const randomNumberGenerator = () => {
    let numbers = new Array(Number(childrenGenerate));
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = helperGenerator(lowRange, highRange);
      console.log(numbers);
    }
    setChildren(numbers);
    return numbers;
  };

  const factoryAddHandler = e => {
    e.preventDefault();
    if (childrenGenerate > 15) {
      setMessage("Sorry 15 is the limit!");
    } else if (factoryName === "") {
      setMessage("Factory Name Can Not Be Empty");
    } else {
      const numberOfChildren = randomNumberGenerator();
      const ident = uuid();
      let tempFact = {
        factName: factoryName,
        childGen: childrenGenerate,
        lRange: lowRange,
        hRange: highRange,
        children: numberOfChildren,
        ident: ident
      };
      setMessage(null);
      generateFactory(tempFact);
      postFact(numberOfChildren, ident);
      reset();
    }
  };

  const postFact = (numberOfChildren, ident) => {
    // SWITCH FOR LOCAL TESTING
    //axios.post('http://localhost:4000/add-factory', {
    axios
      .post("https://full-stack-web-challenge.herokuapp.com/add-factory", {
        factName: factoryName,
        childGen: childrenGenerate,
        lRange: lowRange,
        hRange: highRange,
        children: numberOfChildren,
        ident: ident
      })
      .then(async res => {
        if (res.status !== 200) {
          console.log("ERROR");
          setMessage(res.data);
        }
        console.log(res.data);
        // SWITCH FOR LOCAL TESTING
        //await axios.get('http://localhost:4000/get-factory').then(res => {
        await axios
          .get("https://full-stack-web-challenge.herokuapp.com/get-factory")
          .then(res => {
            console.log("get log: ", res.data);
            setRoot(res.data);
          });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.Container}>
      <form className={styles.Form}>
        <h3 className={styles.formHeading}>Generate your Factory</h3>
        <label htmlFor="factoryName">Factory Name</label>
        <input
          className={styles.scaleUp}
          type="text"
          name="factoryName"
          value={factoryName}
          placeholder="Factory Name..."
          onChange={setFactoryName}
        />
        <label htmlFor="childToGen">
          How many children should your Factory generate? (Limit 15)
        </label>
        <input
          type="number"
          name="childToGen"
          value={Number(childrenGenerate)}
          placeholder="Children to generate..."
          onChange={setChildrenGenerate}
        />
        <label htmlFor="lowRange">Low Range</label>
        <input
          type="number"
          name="lowRange"
          value={Number(lowRange)}
          placeholder="Low Range..."
          onChange={setLowRange}
        />
        <label htmlFor="highRange">High Range</label>
        <input
          type="number"
          name="highRange"
          value={Number(highRange)}
          placeholder="High Range..."
          onChange={setHighRange}
        />
        <button
          className={styles.GenerateBtn}
          type="submit"
          onClick={e => factoryAddHandler(e)}
        >
          Create Factory
        </button>
    {message && <Message message={message}/>}
      </form>
    </div>
  );
};

export default FactoryForm;
