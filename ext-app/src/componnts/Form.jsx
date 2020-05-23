import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext)

    const submitHandler = (e) => {
        e.preventDefault()
        if (value.trim()) {
            firebase.addNotes(value.trim()).then(() => {
                alert.show('Заметка было создана', 'success')
            }).catch(() => {
                    alert.show('не правилно', 'danger')
                })
            alert.show('Заметка было создана', 'success')
            setValue('')
        } else {
            alert.show('Вводите название заметки')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className='form-control'
                       placeholder='enter note name'
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}
export default Form;
