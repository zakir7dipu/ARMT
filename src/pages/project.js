import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import Projects from "../components/Projects";
import axios from "../axios-plugin";

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            basePath: process.env.React_App_Base_Url,
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
            <div>
                <Fragment>
                    <title>ARMT | Project</title>
                    <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                    <PageTitle pageTitle={'All Project'} pagesub={'Projects'}/>
                    <Projects/>
                    <Footer about={this.state.about} address={this.state.address} phone={this.state.phone} email={this.state.email}/>
                    <Scrollbar/>
                </Fragment>
            </div>
        );
    }
}

export default Project;