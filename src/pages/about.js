import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import AboutSection from "../components/About2"
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'}/>
                <AboutSection/>
                <Footer/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default About;