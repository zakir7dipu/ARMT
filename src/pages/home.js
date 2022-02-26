import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Featurs";
import EventSection from "../components/Events";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fragment>
                <title>ARMT | Home</title>
                <Navbar/>
                <Hero/>
                <About/>
                <Features/>
                <EventSection/>
                <Partner/>
                <Footer/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default Home;