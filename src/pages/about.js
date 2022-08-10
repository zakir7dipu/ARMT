import React, { Component, Fragment } from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import AboutSection from "../components/About2"
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";
import "./pageloaderstyle.css";

class About extends Component {

    constructor(props) {
        super();
        this.state = {
            pageload: false,
            basePath: process.env.React_App_Base_Url,
            logo: '',
            about: '',
            address: '',
            phone: '',
            email: '',
            bannerImage: ''
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
                    bannerImage: res.data.banner_image
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
                    <title>ARMT | About Us</title>
                    <Navbar logo={this.state.basePath + this.state.logo} phone={this.state.phone} email={this.state.email} />
                    <PageTitle pageTitle={'About Us'} pagesub={'About'} banner_image={this.state.bannerImage} />
                    <AboutSection />
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

export default About;