import {NotesAPI} from "../api/api";

const SHOW_HIDE_LOADER = 'SHOW_HIDE_LOADER';
const ADD_NOTES = 'ADD_NOTES';
const REMOVE_NOTE = 'REMOVE_NOTE';

let initialState = {
    notes: [],
    alertStatus: 'warning',
};

export const addNotesAC = (payload) => {
    return {
        type: ADD_NOTES,
        payload: payload
    }
}
export const getNotesThunk = () => {
    return async (dispatch) => {
        let data = await NotesAPI.getNotesApi()
        if (!data) {
            dispatch(addNotesAC(''));
            return null
        }
        const payload = Object.keys(data).map(key => {
            return {
                ...data[key],
                id: key
            }
        })
        dispatch(addNotesAC(payload));
    }
};

export const postNotesThunk = (title) => {
    return async (dispatch) => {
        let data = await NotesAPI.postNotesApi(title)
        if (data) {
            dispatch(getNotesThunk());
        }
    }
};
export const deleteNoteThunk = (noteId) => {
    return (dispatch) => {
        NotesAPI.deleteNoteApi(noteId).then(response => {
            dispatch(getNotesThunk());
        });
    }
};
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            return {
                ...state,
                notes: action.payload, // from firebase come array so [ empty ] = [{},{},{}]
            };
        case REMOVE_NOTE:
            return {
                ...state, notes: state.notes.filter(i => i.id !== action.payload)
                //     [
                //     ...state.notes.slice(0, action.payload),
                //     ...state.notes.slice(action.payload + 1)
                // ],
            };
        default:
            return state;
    }
};

export default homeReducer;

