import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";


class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fragment>
                <title>ARMT | Contact</title>
                <Navbar/>
                <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>
                <ContactSection/>
                <Footer/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default Contact;