import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import Footer from "../components/Footer";

class About extends Component {

    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageTitle pageTitle={'All Project'} pagesub={'Projects'}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;