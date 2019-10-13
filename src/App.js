import React, { useState, useEffect, useReducer, useContext } from "react";
import notesReducer from "./reducers/notes-reducer";
import "./App.css";

import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";

import NotesContext from "./context/NotesContext";

const App = () => {
    const notesContext = useContext(NotesContext);

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes"));

        dispatch({ type: "POPULATE_NOTES", notes });
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNotes = e => {
        e.preventDefault();
        dispatch({ type: "ADD_NOTE", title, message });
        setTitle("");
        setMessage("");
    };

    const removeNote = title => {
        dispatch({ type: "REMOVE_NOTE", title });
        // setNotes(notes.filter(note => note.title !== title));
    };
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div className="App">
                <NotesForm
                    addNotes={addNotes}
                    title={title}
                    setTitle={setTitle}
                    message={message}
                    setMessage={setMessage}
                />
                <NotesList removeNote={removeNote} />
            </div>
        </NotesContext.Provider>
    );
};

export { App as default };
