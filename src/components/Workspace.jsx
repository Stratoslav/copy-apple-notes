import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import s from "../styles/workspace.module.css";
import { Context } from "../utils/context";
import Modal from "./Modal";

function Workspace() {
  const {
    modal,
    deleteTodo,
    toggleChangeText,
    setToggleChangeText,
    toggleChangeTitle,
    setModal,
    currentText,
    setCurrentText,
    handleEditNote,
    notes,
    currentTitle,
    setCurrentTitle,
    setToggleChangeTitle,
  } = useContext(Context);
  console.log(currentText);
  useEffect(() => {}, []);
  const { id } = useParams();

  const currentTodo = notes.find((note) => note.id === id);

  const todo = notes.filter((todo) => todo.id === id);

  const changeTodoText = (e) => {
    const changeText = notes.find((note) => note.id === id);

    changeText.text = e.target.value;
    setCurrentText(e.target.value);
    return;
  };

  const handleBlurText = (e) => {
    setToggleChangeText(!toggleChangeText);
    setToggleChangeTitle(!toggleChangeTitle);

    handleEditNote();
  };
  const changeTodoTitle = (e) => {
    currentTodo.title = e.target.value;
    setCurrentTitle(e.target.value);
    return;
  };

  return (
    <>
      <div className={s.workSpace}>
        {todo.map(({ id, text, title, date }) => (
          <>
            {!toggleChangeText || !toggleChangeTitle ? (
              <div>
                {
                  <div className="todo__list-item" key={id}>
                    <div className={s.data}>{date}</div>
                    <p className={s.workSpaceTitle}>{title}</p>

                    <p className={s.workSpaceText}>{text}</p>
                  </div>
                }
              </div>
            ) : (
              <div className="workSpaceWrap">
                <div className={s.data}>{date}</div>
                <input
                  className={s.workspace__input}
                  type="text"
                  onChange={(e) => changeTodoTitle(e)}
                  onBlur={handleBlurText}
                  value={currentTitle}
                />
                <textarea
                  id="change"
                  className={s.workspace__input}
                  type="text"
                  onChange={(e) => changeTodoText(e)}
                  onBlur={handleBlurText}
                  value={currentText}
                  autoFocus
                />
              </div>
            )}
          </>
        ))}
      </div>
      <Context.Provider value={{ id, deleteTodo, setModal }}>
        {modal && <Modal />}
      </Context.Provider>
    </>
  );
}

export default Workspace;
