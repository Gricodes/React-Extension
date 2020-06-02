import React from "react";
import {renderField} from "../formcontrol/FormControl";
import {Field, reduxForm} from "redux-form";
// import Alert from "./Alert";

const Form = (props) => {
    const myHandleSubmit = (e) => {
        props.postNotesThunk(e.newTitle);
        e.newTitle = ''
    }

    return (
        <div>
 {/*<Alert/>*/}
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
