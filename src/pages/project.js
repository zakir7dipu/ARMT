import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"

class About extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageTitle pageTitle={'All Project'} pagesub={'Projects'}/>
            </Fragment>
        );
    }
}

export default About;