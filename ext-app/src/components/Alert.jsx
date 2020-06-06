import React from "react";
// import {CSSTransition} from 'react-transition-group';

const Alert = (props) => {
    let danger = 'Warning! The note name must not be empty';
    let success = 'You successfully added a new note !';
    let warning = 'Please added a new note'

    return (
        // <CSSTransition
        //     in={props.hideAlert}
        //     timeout={5000}
        //     classNames={'alert'}
        //     mountOnEnter
        //     unmountOnExit
        // >
        <div className={`alert alert-${props.alertType} alert-dismissible fade ${props.hideAlert}`}
             role="alert">
            {props.alertType === 'warning' && <strong>{warning}</strong>}
            {props.alertType === 'danger' && <strong>{danger}</strong>}
            {props.alertType === 'success' && <strong>{success}</strong>}
            <button onClick={props.hideAlertFunc} type="button" className="close" data-dismiss="alert"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        // </CSSTransition>
    )
}
export default Alert;