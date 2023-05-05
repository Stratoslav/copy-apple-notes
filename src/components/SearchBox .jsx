import React, { useState } from "react";
import s from "../styles/searchbox.module.css";
import Modal from "./Modal";
function SearchBox() {
  const [modal, setModal] = useState(false);
  const openAddModal = (e) => {
    setModal(true);
  };
  return (
    <>
      <header className="header">
        <div className="edit__bar">
          <button onClick={openAddModal} className={s.add}></button>
          <button className={s.remove}></button>
          <button className={s.edit}></button>
        </div>

        <input className={s.search} type="text" placeholder="search" />
      </header>
      {modal && (
        <div>
          <Modal />
        </div>
      )}
    </>
  );
}

export default SearchBox;
