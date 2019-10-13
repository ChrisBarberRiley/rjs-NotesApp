import React from "react";

const NotesForm = ({ addNotes, title, setTitle, message, setMessage }) => {
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
