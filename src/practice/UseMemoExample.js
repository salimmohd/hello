import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [num, setNum] = useState(10000);
  const [count, setCount] = useState(0);

  const memorized = useMemo(() => {
    expesiveCalclation(num);
  }, [num]);
  //   console.log("output>>", output);

  return (
    <div>
      Use Memo
      <button onClick={() => setCount((count) => count + 1)}>
        Increment{count}
      </button>
      <input onChange={(e) => setNum(parseInt(e.target.value))}></input>
      {num}
    </div>
  );
};
function expesiveCalclation(num) {
  let value = 0;
  for (let i = 0; i <= num; i++) {
    value = value + i;
  }
  console.log("end");
  return value;
}
export default UseMemoExample;
