import React, { useEffect, useReducer } from "react";
import notesReducer from "./reducers/notes-reducer";
import "./App.css";

import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";

import NotesContext from "./context/NotesContext";

const App = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes"));

        dispatch({ type: "POPULATE_NOTES", notes });
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div className="App">
                <NotesForm />
                <NotesList />
            </div>
        </NotesContext.Provider>
    );
};

export { App as default };
