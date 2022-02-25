import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import AboutSection from "../components/About2"
import Footer from "../components/Footer";
class About extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'}/>
                <AboutSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;