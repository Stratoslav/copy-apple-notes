import React, { useContext, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
// import { todoList } from "./ListItem";
import s from "../styles/sidebar.css";
import { Context } from "../utils/context";
import { todoList } from "./ListItem";
import shortid from "shortid";

const SlideBar = () => {
  const ref = useRef(null);
  const [activeClass, setActiveClass] = useState(false);
  const { filterTodo, notes, setIsChosen, handleNoteClick } =
    useContext(Context);

  return (
    <div className={"sidebar"}>
      <ul className={"sidebar__notes"}>
        {notes
          .filter((note) => note.title.toLowerCase().includes(filterTodo))
          .map((todo) => (
            <li
              ref={ref}
              id={shortid.generate()}
              onClick={() => {
                handleNoteClick(todo);
                setIsChosen(true);
              }}
              className={"todoListItem"}
              key={todo.id}
            >
              <NavLink to={`/todo/${todo.id}`}>
                <h2>
                  {todo.title.length > 20
                    ? todo.title.substring(0, 20) + "..."
                    : todo.title}
                </h2>
                <div className={"infoWrap"}>
                  <span>
                    <strong> {todo.date.substring(4, 16)}</strong>
                  </span>
                  <div className={"sidebar__text"}>
                    {todo.text.length > 13
                      ? todo.text.substring(0, 13) + "..."
                      : todo.text}
                  </div>
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
