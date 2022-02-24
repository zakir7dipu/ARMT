import React, {Component, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
import Contact from "../pages/contact";
class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/project" component={Project}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;