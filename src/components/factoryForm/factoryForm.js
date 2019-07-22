import React, { useState } from "react";

import axios from "axios";
import uuid from "uuid/v4";

import useFormState from "../../hooks/useFormState.js";

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
  const [id, setId] = useState("");
  //const [toggle, setToggle] = useState(false)
  //console.log("Ax: ", factoryName, childrenGenerate, lowRange, highRange, children)
  const reset = () => {
    resetFactoryName();
    resetChildrenGenerate();
    resetLowRange();
    resetHighRange();
  };

  //useEffect(() => {
  //postFact()
  //}, [highRange])

  const helperGenerator = (low, high) => {
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
    //setChildren(numbers)
  };

  const factoryAddHandler = e => {
    e.preventDefault();
    if (childrenGenerate > 15) {
      setMessage("Sorry 15 is the limit!");
    } else if (factoryName === "") {
      setMessage("Factory Name Can Not Be Empty");
    } else {
      //let tempFact = {}
      const numberOfChildren = randomNumberGenerator();
      const id = uuid();
      //console.log("children: ", children)
      let tempFact = {
        factName: factoryName,
        childGen: childrenGenerate,
        lRange: lowRange,
        hRange: highRange,
        children: numberOfChildren,
        id: id
      };
      //setNewFactory([...newFactory, ...tempFact])
      setMessage(null);
      generateFactory(tempFact);
      //console.log('newFactory after: ', newFactory)
      postFact(numberOfChildren, id);
      reset();
    }
  };

  const postFact = (numberOfChildren, id) => {
    console.log(factoryName, childrenGenerate, lowRange, highRange, children);
    //axios.post('http://localhost:4000/add-factory', {
    axios
      .post("https://full-stack-web-challenge.herokuapp.com/add-factory", {
        factName: factoryName,
        childGen: childrenGenerate,
        lRange: lowRange,
        hRange: highRange,
        children: numberOfChildren,
        id: id
      })
      .then(async res => {
        console.log(res.data);
        if (res.status !== 200) {
          setMessage(res.data);
          setRoot(res.data);
          //await axios.get('http://localhost:4000/get-factory').then(res => {
          await axios
            .get("https://full-stack-web-challenge.herokuapp.com/get-factory")
            .then(res => {
              console.log("get log: ", res.data);
              setRoot(res.data);
            });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.Container}>
      <form className={styles.Form}>
        <h3 className={styles.formHeading}>Generate your Factory</h3>
        <label htmlFor="factoryName">Factory Name</label>
        <input
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
        {message}
      </form>
    </div>
  );
};

export default FactoryForm;
