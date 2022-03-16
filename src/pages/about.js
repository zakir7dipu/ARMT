import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import AboutSection from "../components/About2"
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";
class About extends Component {

    constructor(props) {
        super();
        this.state = {
            basePath: "http://127.0.0.1:8000",
            logo: null,
            about: null,
            address: null,
            phone: null,
            email: null,
            bannerImage: null
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
    }

    render() {
        return (
            <Fragment>
                <title>ARMT | About Us</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'} banner_image={this.state.bannerImage}/>
                <AboutSection/>
                <Footer about={this.state.about} address={this.state.address} phone={this.state.phone} email={this.state.email}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default About;