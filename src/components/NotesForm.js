import React, { useState, useContext } from "react";
import NotesContext from "../context/NotesContext";

const NotesForm = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const { dispatch } = useContext(NotesContext);

    const addNotes = e => {
        e.preventDefault();
        dispatch({ type: "ADD_NOTE", title, message });
        setTitle("");
        setMessage("");
    };

    return (
        <div>
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
        </div>
    );
};

export default NotesForm;
