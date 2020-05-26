import React from "react";
import axios from "axios";

// axios.post(`https://ext-app-hooks.firebaseio.com/notes.json`, {title:'barev', date : new Date().toLocaleDateString() })
//     .then(ppp => {
//     })
//
//  axios.get(`https://ext-app-hooks.firebaseio.com/notes.json`)
//     .then(response => {
//         console.log(response.data)
//     })



const Notes = (props) => {

    const onClickFunc = (number)=>{
        props.removeTitleAC(number)
    }

    return (
        <ul className="list-group">
            {props.notes.map((i,key) => (
                    <li key={key} className="list-group-item note">
                        <div>
                            <strong>{key} {i.title}</strong>
                            <small className='pl-4'>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button onClick={()=>{onClickFunc(i.id)}} type="button" className="btn btn-outline-danger btn-sm">&#10006;</button>
                    </li>
                )
            )}
        </ul>
    )
}
export default Notes;
