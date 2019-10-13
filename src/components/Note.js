import React from "react";

const Note = ({ note: { title, message }, removeNote }) => {
    return (
        <div key={title} onClick={() => removeNote(title)}>
            <br />
            Title: {title}
            <br />
            Message: {message}
        </div>
    );
};

export default Note;
