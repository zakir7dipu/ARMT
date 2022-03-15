import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            basePath: "http://127.0.0.1:8000",
            logo: null,
            about: null,
            address: null,
            phone: null,
            email: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get(`/api/app/base-info`)
            .then(res => {
                this.setState({
                    logo: res.data.logo,
                    about: res.data.about,
                    address: res.data.address,
                    phone: res.data.phone,
                    email: res.data.email,
                })
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <title>ARMT | Contact</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>
                <ContactSection/>
                <Footer/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default Contact;