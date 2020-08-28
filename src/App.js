import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Menu from "./Menu";
import Order from "./Order";

const App = () => {
    return (
        <Router>
            <div className={"app"}>
                <Switch>
                    <Route exact
                           path="/">
                        <Header/>
                        <LandingPage/>
                    </Route>
                    <Route exact
                           path="/menu">
                        <Header/>
                        <Menu/>
                    </Route>
                    <Route exact
                           path="/order">
                        <Header/>
                        <Order/>
                    </Route>
                    <Route exact
                           path="/contact">
                            <Header/>
                            <Contact/>
                    </Route>
                    <Route exact
                           path="/cart">
                        <Header/>
                        <h1>CART</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;