import React from "react";

const Notes = (props) => {
    const onClickFunc = (id)=>{
        props.deleteNoteThunk(id)
    }

    return (
        <ul className="list-group">
            {props.notes.map((i,key) => (
                    <li key={key} className="list-group-item note">
                        <div>
                            <strong>{key}. {i.title}</strong>
                            <small className='pl-4'>{i.date}</small>
                        </div>
                        <button onClick={()=>{onClickFunc(i.id)}} type="button" className="btn btn-outline-danger btn-sm">&#10006;</button>
                    </li>
                )
            )}
        </ul>
    )
}
export default Notes;
