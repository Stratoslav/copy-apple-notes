import "./App.css";
import SearchBox from "./components/SearchBox ";
import SlideBar from "./components/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Workspace from "./components/Workspace";
// const list = { name: "Stas" };
// console.log(window.indexedDB.open("test", list));
function App() {
  return (
    <div className="App">
      <SearchBox />
      <div className=" container">
        <SlideBar />
        <Routes>
          <Route path="/todo/:id" element={<Workspace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
