import React, { useState, useEffect } from "react";
import { openDB } from "idb";
import { Context } from "../utils/context";
import SearchBox from "./SearchBox ";
import shortid from "shortid";

const NOTES_DB_NAME = "notesDB";
const NOTES_STORE_NAME = "notesStore";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    openDB(NOTES_DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(NOTES_STORE_NAME, { keyPath: "id" });
      },
    })
      .then((db) => {
        const tx = db.transaction(NOTES_STORE_NAME, "readonly");
        const store = tx.objectStore(NOTES_STORE_NAME);
        return store.getAll();
      })
      .then((notes) => {
        setNotes(notes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleNoteClick(note) {
    setSelectedNote(note);
  }

  function handleAddNote() {
    const newNote = {
      id: shortid.generate(),
      title: "Title",
      text: "text",
      date: `${new Date().toDateString()}  ${new Date()
        .toLocaleTimeString()
        .substring(0, 5)}`,
    };
    openDB(NOTES_DB_NAME, 1)
      .then((db) => {
        const tx = db.transaction(NOTES_STORE_NAME, "readwrite");
        const store = tx.objectStore(NOTES_STORE_NAME);
        store.add(newNote);
        return tx.complete;
      })
      .then(() => {
        setNotes([...notes, newNote]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleEditNote() {
    openDB(NOTES_DB_NAME, 1)
      .then((db) => {
        const tx = db.transaction(NOTES_STORE_NAME, "readwrite");
        const store = tx.objectStore(NOTES_STORE_NAME);
        store.put(selectedNote);
        return tx.complete;
      })
      .then(() => {
        const updatedNotes = notes.map((note) => {
          if (note.id === selectedNote.id) {
            return selectedNote;
          }
          return note;
        });
        setNotes(updatedNotes);
        setSelectedNote(null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleDeleteNote() {
    openDB(NOTES_DB_NAME, 1)
      .then((db) => {
        const tx = db.transaction(NOTES_STORE_NAME, "readwrite");
        const store = tx.objectStore(NOTES_STORE_NAME);
        store.delete(selectedNote.id);
        return tx.complete;
      })
      .then(() => {
        const updatedNotes = notes.filter(
          (note) => note.id !== selectedNote.id
        );
        setNotes(updatedNotes);
        setSelectedNote(null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <Context.Provider
        value={{
          searchTerm,
          handleNoteClick,
          selectedNote,
          handleSearchTermChange,
          notes,
          handleDeleteNote,
          handleEditNote,
          handleAddNote,
        }}
      >
        <SearchBox />
      </Context.Provider>
    </div>
  );
}

export default Notes;
