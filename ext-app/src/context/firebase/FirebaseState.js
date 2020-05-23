import React, {useReducer} from "react";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import axios from 'axios'
import {REMOVE_NOTE, SHOW_LOADER} from "../types";

const url = 'https://ext-app-hooks.firebaseio.com'


export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false

    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
        // console.log("fetchNotes", res.data)
    }

    const addNotes = async title => {
        const note = {
            title, date: new Date().toJSON()
        }
        // throw new Error('NarekError')

        const res = await axios.post(`${url}/notes.json`, note)
        // console.log('addNotes', res.data)
    }

    const removeNotes = async id => {
        const res = await axios.delete(`${url}/notes/${id}.json`)
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider
            value={{
                showLoader,
                fetchNotes,
                addNotes,
                removeNotes,
                loading: state.loading,
                notes: state.notes
            }}>
            {children}
        </FirebaseContext.Provider>
    )
}
