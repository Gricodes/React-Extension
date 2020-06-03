import React, {useState, useEffect} from "react";
import {renderField} from "../formcontrol/FormControl";
import {Field, reduxForm} from "redux-form";
import Alert from "./Alert";

const Form = (props) => {

    const [alertType, setAlertType] = useState('warning');
    const [hideAlert, setHideAlert] = useState('show');

    useEffect(() => {
        setAlertType(alertType);
    }, [alertType]);

    const myHandleSubmit = (e) => {
        if (e.newTitle && e.newTitle.length) {
            setHideAlert('show');
            setAlertType('success');
            props.postNotesThunk(e.newTitle);
            e.newTitle = ''
        } else {
            setHideAlert('show');
            setAlertType('danger');
        }
    }
    const hideAlertFunc = () => {
        setHideAlert('hide');
    }
    return (
        <div>
            <Alert alertType={alertType} hideAlert={hideAlert} hideAlertFunc={hideAlertFunc}/>
            <form onSubmit={props.handleSubmit(myHandleSubmit)}>
                <div className="form-group">
                    <Field component={renderField}
                           type="text"
                           name={'newTitle'}
                    />
                </div>
            </form>
        </div>
    )
}
export default reduxForm({form: 'titleFormExt'})(Form);
