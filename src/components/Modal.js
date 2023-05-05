import React from "react";
import s from "../styles/modal.module.css";
function Modal() {
  return (
    <div className={s.modal}>
      <label className="title__label">
        Title
        <input className="title__input" type="text" />
      </label>
      <label className="text__label">
        Text
        <input className="text__label" type="text" />
        <button>add</button>
      </label>
    </div>
  );
}

export default Modal;
