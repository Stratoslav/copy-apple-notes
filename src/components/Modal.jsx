import React, { useContext } from "react";
import s from "../styles/modal.module.css";
import { Context } from "../utils/context";
function Modal() {
  const { id, deleteTodo, setModal } = useContext(Context);

  return (
    <section className={s.modal}>
      <div className={s.modalWrap}>
        <h3>Delete button?</h3>
        <button className={s.deleteBtn} onClick={() => deleteTodo(id)}>
          delete
        </button>
        <button className={s.cancelBtn} onClick={() => setModal(false)}>
          cancel
        </button>
      </div>
    </section>
  );
}

export default Modal;
