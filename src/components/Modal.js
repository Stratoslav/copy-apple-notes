import React, { useContext } from "react";
import s from "../styles/modal.module.css";
import { Context } from "../utils/context";
import { useParams } from "react-router-dom";
function Modal() {
  const { id, deleteTodo } = useContext(Context);

  console.log(id);
  return (
    <section className={s.modal}>
      <h3>Delete button?</h3>
      <button onClick={() => deleteTodo(id)}>add</button>
    </section>
  );
}

export default Modal;
