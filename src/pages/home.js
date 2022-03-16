import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Featurs";
import EventSection from "../components/Events";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";

class Home extends Component {

    constructor(props) {
        super();
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
                <title>ARMT | Home</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <Hero/>
                <About/>
                <Features/>
                <EventSection/>
                <Partner/>
                <Footer about={this.state.about} address={this.state.address} phone={this.state.phone} email={this.state.email}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default Home;