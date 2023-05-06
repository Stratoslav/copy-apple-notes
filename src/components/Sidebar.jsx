import React, { useContext, useRef } from "react";

import { NavLink } from "react-router-dom";
// import { todoList } from "./ListItem";
import s from "../styles/sidebar.module.css";
import { Context } from "../utils/context";
import { todoList } from "./ListItem";
const SlideBar = () => {
  const { todos, chosenTodo, filterTodo, notes, handleNoteClick } =
    useContext(Context);

  return (
    <div className={s.sidebar}>
      <ul>
        {notes
          .filter((note) => note.title.toLowerCase().includes(filterTodo))
          .map((todo) => (
            <li
              onClick={() => handleNoteClick(todo)}
              className={s.todoListItem}
              key={todo.id}
            >
              <NavLink to={`/todo/${todo.id}`}>
                <h2>{todo.title}</h2>
                <div className={s.infoWrap}>
                  {/* <span>
                      <strong>{todo.date} </strong>
                    </span> */}
                  <p>
                    {todo.text.length > 20
                      ? todo.text.substring(0, 17) + "..."
                      : todo.text}
                  </p>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
      {/* <Routes>
        {/* <Route exact path={`//:${}`} render={() => <MessagesGet />} /> */}
      {/* </Routes> */}
    </div>
  );
};

export default SlideBar;
