import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import ProjectDetails from "../components/ProjectSingle/index";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";

class ProjectSingle extends Component {
    constructor(props) {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            logo: null,
            about: null,
            address: null,
            phone: null,
            email: null,
            bannerImage: null,
            project:{}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get(`/api/app/projects-single/${this.props.match.params.projectId}`)
            .then(res => {
                this.setState({
                    logo: res.data.baseInfo.logo,
                    about: res.data.baseInfo.about,
                    address: res.data.baseInfo.address,
                    phone: res.data.baseInfo.phone,
                    email: res.data.baseInfo.email,
                    bannerImage: res.data.baseInfo.banner_image,
                    project: res.data.project,
                })
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <title>ARMT | {this.state.project.title}</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <PageTitle pageTitle={this.state.project.title} pagesub={'Projects'} banner_image={this.state.bannerImage}/>
                <ProjectDetails description={this.state.project.description}/>
                <Footer about={this.state.about} address={this.state.address} phone={this.state.phone} email={this.state.email} socialMedia={this.state.socialMedia}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default ProjectSingle;