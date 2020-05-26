import React from "react";


const Alert = () => {

    if (!alert.visible) {
        return null
    }
    return (
        <div className="container">
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible" role="alert`}>
                <strong>Warning !</strong> {alert.text}
                <button  type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
export default Alert;