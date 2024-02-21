import React, { useEffect, useMemo, useReducer, useState } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [effect, setEffect] = useState(0);
  const [meno, setMeno] = useState(0);
  useEffect(() => {
    console.log("from effect>>>" + effect);
  }, [effect]);
  useMemo(() => {
    console.log("form Memo" + meno);
  }, [meno]);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+ </button>
      <button onClick={() => dispatch({ type: "decrement" })}>- </button>
      <button onClick={() => setEffect(effect + 1)}>Effect Inrement</button>
      <button onClick={() => setMeno(meno + 1)}>Memo Icrement</button>
    </div>
  );
};

export default ContactUs;
