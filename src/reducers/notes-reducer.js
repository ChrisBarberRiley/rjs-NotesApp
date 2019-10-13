const notesReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_NOTE":
            return state.filter(note => note.title !== action.title);
        case "POPULATE_NOTES":
            return action.notes;
        case "ADD_NOTE":
            return [
                ...state,
                {
                    title: action.title,
                    message: action.message
                }
            ];
        default:
            return state;
    }
};

export { notesReducer as default };
