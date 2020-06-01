import React, {useState} from "react";
import {renderField} from "../formcontrol/FormControl";
import {Field, reduxForm} from "redux-form";
import Alert from "./Alert";

const Form = (props) => {


    const [count, setCount] = useState(null)
    const myHandleSubmit = (e) => {
        if (e.newTitle) {
            setCount(true)
            props.addNotesAC(e.newTitle);
            e.newTitle = ''
        }
    }
    return (
        <div>
            <Alert props={count}/>
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
