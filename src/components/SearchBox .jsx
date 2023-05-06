import React, { useContext, useRef, useState } from "react";
import s from "../styles/searchbox.module.css";

import { Context } from "../utils/context";

import shortid from "shortid";
import { todoList } from "./ListItem";
import SlideBar from "./Sidebar";
import Modal from "./Modal";
import Workspace from "./Workspace";
import { Route, Routes, useParams } from "react-router-dom";

function SearchBox() {
  const [todos, setTodos] = useState([]);
  const [toggleChangeText, setToggleChangeText] = useState(false);
  const [toggleChangeTitle, setToggleChangeTitle] = useState(false);
  const [isChosen, setIsChosen] = useState(false);
  const [modal, setModal] = useState(false);
  const [filterTodo, setFilterTodo] = useState("");

  const {
    handleDeleteNote,
    handleAddNote,
    notes,
    handleNoteClick,
    selectedNote,
    handleEditNote,
  } = useContext(Context);
  const chosenTodo = () => {
    setIsChosen(true);
  };

  const deleteTodo = () => {
    handleDeleteNote();
    // setTodos((prev) => prev.filter((p) => p.id !== id));
    setModal(false);
  };
  const searchTodo = (e) => {
    setFilterTodo(e.target.value);
  };
  return (
    <>
      <Context.Provider
        value={{
          handleAddNote,
          handleNoteClick,
          todos,
          notes,
          chosenTodo,
          deleteTodo,
          modal,
          filterTodo,
          toggleChangeText,
          setToggleChangeText,
          toggleChangeTitle,
          setToggleChangeTitle,
          selectedNote,
          setIsChosen,
          handleEditNote,
        }}
      >
        <header className="header">
          <div className="edit__bar">
            <button onClick={handleAddNote} className={s.add}></button>
            <button
              onClick={() => setModal(true)}
              className={s.remove}
              disabled={!isChosen}
            ></button>
            <button
              onClick={() => {
                setToggleChangeText(true);
                setToggleChangeTitle(true);
              }}
              className={s.edit}
              disabled={!isChosen}
            ></button>
          </div>

          <input
            onInput={searchTodo}
            className={s.search}
            type="text"
            placeholder="search"
          />
        </header>
        <div style={{ display: "flex" }}>
          {<SlideBar />}

          <Routes>
            <Route path="/todo/:id" element={<Workspace />} />
          </Routes>
        </div>
      </Context.Provider>
    </>
  );
}

export default SearchBox;
