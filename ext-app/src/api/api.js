import axios from "axios";


export const NotesAPI = {
    getNotesApi() {
        return (
            axios.get('https://ext-app-hooks.firebaseio.com/notes.json')
                .then(response => {
                return response.data
            })
        )
    },
    postNotesApi(title) {
        return (
            axios.post('https://ext-app-hooks.firebaseio.com/notes.json',
                {
                    title: title,
                    date: new Date()
                }).then(response => {
                return response.data
            })
        )
    },
    deleteNoteApi(noteId) {
        return (
            axios.delete(`https://ext-app-hooks.firebaseio.com/notes/${noteId}.json`)
        )
    },
};