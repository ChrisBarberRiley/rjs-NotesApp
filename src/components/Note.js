import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";

const Note = ({ note: { title, message } }) => {
    const { notes, dispatch } = useContext(NotesContext);
    return (
        <div
            key={title}
            onClick={() => dispatch({ type: "REMOVE_NOTE", title })}
        >
            <br />
            Title: {title}
            <br />
            Message: {message}
        </div>
    );
};

export default Note;
