import UseRef from "./UseRef";
import React, { useRef, useContext, useState } from "react";
import { store } from "../App";

const Home = () => {
  const data = useRef(null);
  const subminHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <h1>Home Content</h1>
      <form onSubmit={subminHandler}>
        <input ref={data} type="text" placeholder="Enter the Text" />
        <input type="Submit" />
      </form>
      <UseRef />
    </div>
  );
};

export default Home;

export const DashBoard = () => {
  const [data, setData] = useContext(store);
  const [name, setName] = useState("");
  const subminHandler1 = (e) => {
    e.preventDefault();
    setData([...data, { brnadName: name }]);
  };
  return (
    <div>
      <h1>Count: {data.length}</h1>
      {data.map((item, i) => (
        <h2 key={i}>{item.brnadName}</h2>
      ))}
      <form onSubmit={subminHandler1}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Text"
        />
        <input type="Submit" />
      </form>
      {/* <button onClick={() => setData(data + 1)}>UseContext</button>
      <button onClick={() => setData(data - 1)}>UseContext -</button> */}
    </div>
  );
};
