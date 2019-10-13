import React from "react";

import Note from "./Note";

const NotesList = ({ notes, removeNote }) => {
    return (
        <>
            {notes.map(n => (
                <Note key={n.title} note={n} removeNote={removeNote} />
            ))}
        </>
    );
};

export default NotesList;
