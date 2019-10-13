import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import { useSpring, animated } from "react-spring";

const Note = ({ note: { title, message } }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const { dispatch } = useContext(NotesContext);
    return (
        <animated.div
            style={props}
            className="todo"
            key={title}
            onClick={() => dispatch({ type: "REMOVE_NOTE", title })}
        >
            <p>
                <span className="title">Title: </span> {title}
            </p>
            <p>
                <span className="title">Message: </span> {message}
            </p>
        </animated.div>
    );
};

export default Note;
