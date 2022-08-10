import React, { Component, Fragment } from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";
import "./pageloaderstyle.css";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageload: false,
            basePath: process.env.React_App_Base_Url,
            logo: '',
            about: '',
            address: '',
            phone: '',
            email: ''
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
        window.addEventListener('load', (event) => {
            this.setState.pageload = true
        });
    }

    render() {
        if (this.setState.pageload) {
            return (
                <Fragment>
                    <title>ARMT | Contact</title>
                    <Navbar logo={this.state.basePath + this.state.logo} phone={this.state.phone} email={this.state.email} />
                    <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
                    <ContactSection address={this.state.address} phone={this.state.phone} email={this.state.email} />
                    <Footer about={this.state.about} address={this.state.address} phone={this.state.phone} email={this.state.email} />
                    <Scrollbar />
                </Fragment>
            );
        } else {
            return (
                <div className="pagePreLoader">
                    <img src={`${__dirname}giphy.gif`} alt='Loding' />
                </div>
            );
        }
    }
}

export default Contact;