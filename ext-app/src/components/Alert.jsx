import React from "react";
import warning from "react-redux/lib/utils/warning";


const Alert = (props) => {
    let danger = 'Warning! The note name must not be empty';
    let success = 'You successfully added a new note';
    let warning = 'Added a new note'

    return (
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
    )
}
export default Alert;