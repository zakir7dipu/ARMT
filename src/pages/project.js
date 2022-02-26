import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import Projects from "../components/Projects";

class Project extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Navbar/>
                    <PageTitle pageTitle={'All Project'} pagesub={'Projects'}/>
                    <Projects/>
                    <Footer/>
                    <Scrollbar/>
                </Fragment>
            </div>
        );
    }
}

export default Project;