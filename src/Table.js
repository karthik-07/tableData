import React from "react";
import Demo from "./Demo";
import New from "./New";
// import App from "./App";
import Text from "./Text"
import Login from "./Login";
import Logged from "./Logged"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Table() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component= {Login} />
                <Route path="/demo" component= {Demo} />
                <Route path="/new" component= {New} />
            </Switch>
        </Router>
    )
}

export default Table;