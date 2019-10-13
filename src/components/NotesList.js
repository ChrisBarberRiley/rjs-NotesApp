import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";

const NotesList = () => {
    const { notes } = useContext(NotesContext);
    return (
        <>
            {notes.map(n => (
                <Note key={n.title} note={n} />
            ))}
        </>
    );
};

export default NotesList;
