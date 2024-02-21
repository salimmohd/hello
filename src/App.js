// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./practice/NavBar";
import Home, { DashBoard } from "./practice/Home";
import AboutUs from "./practice/AboutUs";
import ContactUs from "./practice/ContactUs";
import SearchTask from "./practice/SearchTask";

import { createContext, useState } from "react";
import Hoc from "./Hoc";

// import Onep from "./practice/Onep";
// import List from "./practice/List";
import Counter from "./practice/Counter";
// import UseMemoExample from "./practice/UseMemoExample";
export const store = createContext();

function App() {
  const [data, setData] = useState([
    { brnadName: "Nokia" },
    { brnadName: "Samusung" },
    { brnadName: "Lava" },
  ]);
  return (
    <div className="App">
      {/* <h1>Practice One React</h1> */}
      {/* <Onep/> */}
      {/* <List/> */}
      {/* <Counter>test sddsdone</Counter> */}

      {/* <UseMemoExample /> */}
      <store.Provider value={[data, setData]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="AboutUs" element={<AboutUs />}></Route>
            <Route path="DashBoard" element={<DashBoard />}></Route>
            <Route path="SearchTask" element={<SearchTask />}></Route>
            <Route path="ContactUs" element={<ContactUs />}></Route>
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default Hoc(App);
