import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
function UseRef() {
  const [todos, setTodos] = useState([]);
  const [nm, setNm] = useState("Saleem");

  const data = useRef(null);
  console.log(data.current);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div>
      <h1 ref={data}>Todo List</h1>
      {nm}
      <br />
      <button onClick={() => (data.current.innerHTML = "Love Your 18")}>
        Change Content
      </button>
      <button onClick={() => setNm("Shahanaz")}>Change State Content</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseRef;
