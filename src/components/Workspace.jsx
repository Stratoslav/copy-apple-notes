import React from "react";
import { useParams } from "react-router-dom";
import { todoList } from "./ListItem";
import s from "../styles/workspace.module.css";
function Workspace() {
  const { id } = useParams();
  const todo = todoList.filter((todo) => todo.id === +id);
  console.log(id);
  return (
    <ul className={s.workSpace}>
      {todo.map(({ id, text, title, data }) => (
        <li className="todo__list-item" key={id}>
          <div className={s.data}>{data}</div>
          <p>{title}</p>
          <div>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Workspace;
