import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const data = useRef(null);
  const subminHandler = (e) => {
    e.preventDefault();
    console.log(data.current.value);
  };
  useEffect(() => {
    data.current.focus();
  }, []);
  return (
    <div>
      <h1>About Content</h1>
      <form onSubmit={subminHandler}>
        <input ref={data} type="text" placeholder="Enter the Text" />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default AboutUs;
