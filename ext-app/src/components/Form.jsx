import React from "react";
import {renderField} from "../formcontrol/FormControl";
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    const myHandleSubmit = (e) => {
        props.sendTitleAC(e.newTitle);
    }
    return (
        <div>
            <form onSubmit={ props.handleSubmit(myHandleSubmit)}>
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
