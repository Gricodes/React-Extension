import axios from "axios";


export const NotesAPI = {
    getNotesApi() {
        return (
            axios.get('https://ext-app-hooks.firebaseio.com/notes.json')
        )
    },
    postNotesApi() {
        return (
            axios.post('https://ext-app-hooks.firebaseio.com/notes.json',
                {
                    title: ' title 5',
                    date: new Date()
                })
        )
    },
};