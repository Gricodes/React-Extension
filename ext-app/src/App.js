import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./componnts/NavBar";
import Alert from "./componnts/Alert";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className='container pt-4'>
                <Alert/>
                <Switch>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/'} component={About}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
