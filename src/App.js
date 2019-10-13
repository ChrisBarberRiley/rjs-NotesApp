import React, { useState, useEffect, useReducer } from "react";
import notesReducer from "./reducers/notes-reducer";
import "./App.css";

const App = () => {
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
        <div className="App">
            <form onSubmit={addNotes}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Messgae"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
                <input type="submit" />
            </form>
            {notes.map(note => (
                <div key={note.title} onClick={() => removeNote(note.title)}>
                    <br />
                    Title: {note.title}
                    <br />
                    Message: {note.message}
                </div>
            ))}
        </div>
    );
};

export { App as default };
