import React, {useContext, useEffect} from "react";
import Form from "../componnts/Form";
import Notes from "../componnts/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../componnts/Loader";

const Home = () => {
    // var arr = Array(5).fill({})    // [{}, {}, {}, {}, {}];
    // const notes = new Array(3).fill('').map((k, i) => ({id: i, title: `Note ${i}`}))
    const {loading, notes, fetchNotes} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
    }, [fetchNotes])

    return (
        <div className="container">
            <Form/>
            <hr/>
            {loading
                ? <Loader/>
                : <Notes notes={notes}/>
            }

        </div>
    )
}
export default Home;