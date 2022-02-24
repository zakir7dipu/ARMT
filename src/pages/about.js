import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"

class About extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'}/>
            </Fragment>
        );
    }
}

export default About;