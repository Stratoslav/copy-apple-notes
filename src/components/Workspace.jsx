import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { todoList } from "./ListItem";
import s from "../styles/workspace.module.css";
import { Context } from "../utils/context";
import Modal from "./Modal";

function Workspace() {
  // const [todoText, setTodoText] = useState("");
  const {
    todos,
    modal,
    deleteTodo,
    toggleChangeText,
    setToggleChangeText,
    setToggleChangeTitle,
    toggleChangeTitle,
    selectedNote,
    handleEditNote,
    notes,
  } = useContext(Context);

  const { id } = useParams();

  const todo = notes.filter((todo) => todo.id === id);
  const currentTodo = notes.find((note) => note.id === id);
  const changeTodoText = (e) => {
    setToggleChangeText(!toggleChangeText);
    currentTodo.text = e.target.value;
    handleEditNote();
    return;
  };
  const changeTodoTitle = (e) => {
    setToggleChangeTitle(!toggleChangeTitle);
    currentTodo.title = e.target.value;
    handleEditNote();
    return;
  };
  // const isChangedText = () => {
  //   setToggleChangeText(true);
  // };
  return (
    <>
      <ul className={s.workSpace}>
        {todo.map(({ id, text, title, date }) => (
          <>
            {!toggleChangeText ? (
              <ul>
                {
                  <li className="todo__list-item" key={id}>
                    {/* <div className={s.data}>{date}</div> */}
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
                  className="todo__list-input"
                  type="text"
                  onBlur={changeTodoTitle}
                />
                <input
                  id="change"
                  className="todo__list-input"
                  type="text"
                  onBlur={changeTodoText}
                />
                <label htmlFor="change" className="form__label">
                  Click to me for changing!
                </label>
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
