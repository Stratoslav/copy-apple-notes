import "./App.css";
import SearchBox from "./components/SearchBox ";
import SlideBar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Workspace from "./components/Workspace";
import Notes from "./components/indexedDB";
// const list = { name: "Stas" };
// console.log(window.indexedDB.open("test", list));
function App() {
  return (
    <div className="App">
      {/* <SearchBox /> */}
      <Notes />
      <div className=" container"></div>
    </div>
  );
}

export default App;
