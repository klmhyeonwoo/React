import React from 'react'
import { useState } from 'react';

export default function Controlled() {

    const [value, setValue] = useState("");
    const [essay, setEssay] = useState("Hello there");
    const [flavor, setFlavor] = useState("lime");

    function handleChange(event) {
        const name = event.target.name;

        if (name === "value") {
            setValue(event.target.value);
        }

        if (name === "essay") {
            setEssay(event.target.value);
        }

        if (name === "flavor") {
            setFlavor(event.target.value);
        }
    }
    
    // function handleChange(event) {
    //     setValue(event.target.value);
    // }

    // function handleEssayChange(event) {
    //     setEssay(event.target.value);
    // }
    
    function handleSubmit(event) {
        alert(`name : ${value}, essay : ${essay}, flavor : ${flavor}`);
        event.preventDefault();
    }

    // function handleFlavorChange(event) {
    //     setFlavor(event.target.value);
    // }

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input name="value" type="text" value={value} onChange={handleChange} />
    </label>
    <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange}/>
    </label>
    <select name="flavor" value={flavor} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
    )
}
