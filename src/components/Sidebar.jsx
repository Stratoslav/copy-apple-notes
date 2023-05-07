import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";

import shortid from "shortid";

import { Context } from "../utils/context";

import "../styles/sidebar.css";

const SideBar = () => {
  const ref = useRef(null);

  const {
    searchTerm,
    notes,
    setIsChosen,
    setCurrentText,
    setCurrentTitle,
    handleNoteClick,
  } = useContext(Context);

  return (
    <div className={"sidebar"}>
      <ul className={"sidebar__notes"}>
        {notes

          .filter((note) => note.title.toLowerCase().includes(searchTerm))
          .reverse()
          .map((todo) => (
            <li
              ref={ref}
              id={shortid.generate()}
              onClick={() => {
                setCurrentText(todo.text);
                setCurrentTitle(todo.title);
                handleNoteClick(todo);
                setIsChosen(true);
              }}
              className={"todoListItem"}
              key={todo.id}
            >
              <NavLink to={`/todo/${todo.id}`}>
                <h2 className="sidebar__title">
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
    </div>
  );
};

export default SideBar;
