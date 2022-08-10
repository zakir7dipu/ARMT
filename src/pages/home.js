import React, { Component, Fragment } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Featurs";
import EventSection from "../components/Events";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";
import "./pageloaderstyle.css";

class Home extends Component {

    constructor(props) {
        super();
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
                    <title>ARMT | Home</title>
                    <Navbar logo={this.state.basePath + this.state.logo} phone={this.state.phone} email={this.state.email} />
                    <Hero />
                    <About />
                    <Features />
                    <EventSection />
                    {/*<Partner/>*/}
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

export default Home;