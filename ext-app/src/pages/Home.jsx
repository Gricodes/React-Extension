import React,{useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import {removeNoteAC, addNotesAC, showAlertAC, getNotesThunk} from "../redux/homeReducer";
import {connect} from "react-redux";
import {compose} from "redux";

const Home = (props) => {
    useEffect(() => {
        props.getNotesThunk()
    }, [])

    return (
        <div className="container">
            <Form {...props}/>
            <hr/>
            <Notes {...props} notes = {props.notes} />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        notes: state.homeReducer.notes,
        alertVisible: state.homeReducer.alertVisible
    }
};

export default compose(connect(mapStateToProps, {addNotesAC,removeNoteAC,showAlertAC,getNotesThunk}),redirectComponentHoc)(Home);
