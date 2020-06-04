import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Notes = (props) => {
    const onClickFunc = (id) => {
        props.deleteNoteThunk(id)
    }

    return (
        <TransitionGroup component='ul' className="list-group">
            {props.notes.map((i, key) => (
                    <CSSTransition
                        key={key}
                        classNames={'note'}
                        timeout={{enter: 300, exit: 500}}>
                        <li className="list-group-item note">
                            <div>
                                <strong>{key}. {i.title}</strong>
                                <small className='pl-4'>{i.date}</small>
                            </div>
                            <button onClick={() => {
                                onClickFunc(i.id)
                            }} type="button" className="btn btn-outline-danger btn-sm">&#10006;</button>
                        </li>
                    </CSSTransition>
                )
            )}
        </TransitionGroup>
    )
}
export default Notes;
