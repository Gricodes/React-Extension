import React from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";

import {redirectComponentHoc} from "../HOC/redirectComponentHoc";
import {removeTitleAC, sendTitleAC} from "../redux/homeReducer";
import {connect} from "react-redux";
import {compose} from "redux";

const Home = (props) => {

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
    }
};

export default compose(connect(mapStateToProps, {sendTitleAC,removeTitleAC}),redirectComponentHoc)(Home);
