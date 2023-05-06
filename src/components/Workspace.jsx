import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import s from "../styles/workspace.module.css";
import { Context } from "../utils/context";
import Modal from "./Modal";

function Workspace() {
  const [todoText, setTodoText] = useState();

  const {
    modal,
    deleteTodo,
    toggleChangeText,
    setToggleChangeText,
    setToggleChangeTitle,
    toggleChangeTitle,

    handleEditNote,
    notes,
  } = useContext(Context);

  const { id } = useParams();

  const todo = notes.filter((todo) => todo.id === id);
  const currentTodo = notes.find((note) => note.id === id);
  const changeTodoText = (e) => {
    currentTodo.text = e.target.value;
    setTodoText(currentTodo.text);

    return;
  };
  const handleBlurText = (e) => {
    setToggleChangeText(!toggleChangeText);
    handleEditNote();
  };
  const changeTodoTitle = (e) => {
    setToggleChangeTitle(!toggleChangeTitle);
    currentTodo.title = e.target.value;

    handleEditNote();
    return;
  };

  return (
    <>
      <ul className={s.workSpace}>
        {todo.map(({ id, text, title, date }) => (
          <>
            {!toggleChangeText || !toggleChangeTitle ? (
              <ul>
                {
                  <li className="todo__list-item" key={id}>
                    <div className={s.data}>{date}</div>
                    <p>{title}</p>
                    <div>
                      <p>{text}</p>
                    </div>
                  </li>
                }
              </ul>
            ) : (
              <ul className="form__group field">
                <input
                  className={s.workspace__input}
                  type="text"
                  onBlur={changeTodoTitle}
                />
                <input
                  id="change"
                  className={s.workspace__input}
                  type="text"
                  onChange={changeTodoText}
                  onBlur={handleBlurText}
                  value={todoText}
                />
              </ul>
            )}
          </>
        ))}
      </ul>
      <Context.Provider value={{ id, deleteTodo }}>
        {modal && <Modal />}
      </Context.Provider>
    </>
  );
}

export default Workspace;
