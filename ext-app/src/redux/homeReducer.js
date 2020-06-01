import {NotesAPI} from "../api/api";

const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';
// const SHOW_LOADER = 'SHOW_LOADER';
const ADD_NOTES = 'ADD_NOTES';
// const FETCH_NOTES = 'FETCH_NOTES';
const REMOVE_NOTE = 'REMOVE_NOTE';

let initialState = {
    notes: [],
    delNotes: [],
    alertVisible: false,
    type: null,
    text: null
};

export const addNotesAC = (payload) => {
    return {
        type: ADD_NOTES,
        payload: payload
    }
}
export const removeNoteAC = (payload) => {
    return {
        type: REMOVE_NOTE,
        payload: payload
    }
}
export const showAlertAC = (payload) => {
    return {
        type: SHOW_ALERT,
        payload: payload
    }
}
export const getNotesThunk = () => {
    return (dispatch) => {
        NotesAPI.getNotesApi().then(response => {
          const payload =  Object.keys(response.data).map(key => {
                return{
                    ...response.data[key],
                    id:key
                }
            })
            dispatch(addNotesAC(payload));
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
        case SHOW_ALERT:
            return {
                ...state,
                alertVisible: action.payload
            };
        case HIDE_ALERT:
            return {
                ...state,
                alertVisible: action.payload
            };
        default:
            return state;
    }
};

export default homeReducer;

