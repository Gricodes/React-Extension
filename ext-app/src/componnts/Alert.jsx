import React from "react";

const Alert = (props) => {
    if (!props.alert) {
        return null
    }
    return (
        <div className="container">
            <div className={`alert alert-${props.alert.type || 'warning'} alert-dismissible" role="alert`}>
                <strong>Warning !</strong> {props.alert.text}
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
export default Alert;