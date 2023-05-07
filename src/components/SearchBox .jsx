import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SideBar from "./Sidebar";
import Workspace from "./Workspace";
import { Context } from "../utils/context";

import s from "../styles/searchbox.module.css";

function SearchBox() {
  const [toggleChangeText, setToggleChangeText] = useState(false);
  const [toggleChangeTitle, setToggleChangeTitle] = useState(false);
  const [isChosen, setIsChosen] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const {
    handleDeleteNote,
    handleAddNote,
    notes,
    searchTerm,
    handleNoteClick,
    selectedNote,
    handleEditNote,
    handleSearchTermChange,
  } = useContext(Context);
  const chosenTodo = () => {
    setIsChosen(true);
  };

  const deleteTodo = () => {
    handleDeleteNote();
    setModal(false);
  };
  const searchTodo = (e) => {
    handleSearchTermChange(e);
  };

  if (modal) {
    window.document.body.style.background = "rgb(220 220 220)";
  } else if (!modal) {
    window.document.body.style.background = "#fff";
  }

  return (
    <>
      <Context.Provider
        value={{
          handleAddNote,
          handleNoteClick,
          searchTerm,
          notes,
          chosenTodo,
          deleteTodo,
          modal,
          toggleChangeText,
          setToggleChangeText,
          toggleChangeTitle,
          setToggleChangeTitle,
          selectedNote,
          setIsChosen,
          handleEditNote,
          setModal,
          setCurrentText,
          currentText,
          currentTitle,
          setCurrentTitle,
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
            placeholder="&#61476; Search"
          />
        </header>
        <div style={{ display: "flex" }}>
          {<SideBar />}

          <Routes>
            <Route path="/todo/:id" element={<Workspace />} />
          </Routes>
        </div>
      </Context.Provider>
    </>
  );
}

export default SearchBox;
