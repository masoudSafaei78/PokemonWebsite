import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import TableAppearance from './Pages/TableAppearance';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
function RouterComponent() {
    return (

        <BrowserRouter>
            <Switch>]
            <Route exact path="/" component={Home} />
                <Route path="/TableAppearance" component={TableAppearance} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Contact" component={Contact} />
                <Route path="/About" component={About} />
                <Route path="/Login" component={Login} />
                <Route path="/SignUp" component={SignUp} />




            </Switch>
        </BrowserRouter>

    )
}

export default RouterComponent
