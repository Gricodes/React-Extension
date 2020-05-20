import React from "react";
import Form from "../componnts/Form";
import Notes from "../componnts/Notes";

const Home = () => {
    // var arr = Array(5).fill({})    // [{}, {}, {}, {}, {}];
    const notes = new Array(3).fill('').map((k, i) => ({id: i, title: `Note ${i}`}))

    return (
        <div className="container">
            <Form/>
            <hr/>
            <Notes notes={notes}/>
        </div>
    )
}
export default Home;