import React from "react";
import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button"

const Onep = () => {
  const [inputValue, setInputvalue] = useState("");
  const [showvalue, setShowvalue] = useState("");

  const handleChange= (e) => {
    setInputvalue(e.target.value);
  }
  const handleClick = ()=>{
   
    setShowvalue(inputValue);
  }

  return (
    <div>
      {/* <input onChange={handleChange} /> */}
      <Input handleChange={handleChange}/>
      <Button handleClick={handleClick}/>
      {/* <button onClick={handleClick}>Update</button> */}
      {/* <h1>Input Value here: {showvalue}</h1> */}
      <Output value={showvalue} here= "Input Value here:"/>
    </div>
  );
};

export default Onep;
