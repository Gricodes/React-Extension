let initialState = {
    notes: [
        {id: 0, title: 'Hi'},
        {id: 1, title: 'How are you'},
        {id: 2, title: 'React'},
    ],
};

export const sendTitleAC = (payload) => {
    return {
        type: 'SEND_TITLE',
        payload: payload
    }
}
export const removeTitleAC = (payload) => {
    return {
        type: 'REMOVE_TITLE',
        payload: payload
    }
}


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_TITLE": // the same push spread operator ====>   [...state.massagesData, {a:4, b:text,}]
            return {
                ...state,
                notes: [...state.notes, {id: 4, title: action.payload}],
            };
        case "REMOVE_TITLE":
            return {
                ...state,
                notes: [
                    ...state.notes.slice(0, action.payload),
                    ...state.notes.slice(action.payload + 1)
                ],
            };
        default:
            return state;
    }
};

export default homeReducer;

