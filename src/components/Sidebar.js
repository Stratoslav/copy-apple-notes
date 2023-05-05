import React, { useRef } from "react";

import { NavLink } from "react-router-dom";
import { todoList } from "./ListItem";
import s from "../styles/sidebar.module.css";
function SlideBar() {
  const ref = useRef(null);
  console.log(ref);
  return (
    <div className={s.sidebar}>
      <ul>
        {todoList.map((todo) => (
          <li className={s.todoListItem} key={todo.id}>
            <NavLink to={`/todo/${todo.id}`}>
              <h2>{todo.title}</h2>
              <div className={s.infoWrap}>
                <span>
                  <strong>{todo.data} </strong>
                </span>
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
}

export default SlideBar;
