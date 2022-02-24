import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Featurs";
import EventSection from "../components/Events";
import Partner from "../components/Partner";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Hero/>
                <About/>
                <Features/>
                <EventSection/>
                <Partner/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;