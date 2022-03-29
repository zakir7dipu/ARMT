import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'
import axios from "../../axios-plugin";
class Index extends Component {

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            projects: []
        }
    }

    componentDidMount() {
        axios.get(`/api/app/projects`)
            .then(res => {
                this.setState({
                    projects: res.data
                })
                console.log(this.state.projects)
            }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="case-area section-padding">
                <Container>
                    <Col lg={6} className="offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>PROJECTS</span>
                            </div>
                            <h2>Our Running Projects</h2>
                            {/*<p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>*/}
                        </div>
                    </Col>
                    <Row>
                        {
                            this.state.projects.map(item => {
                                return(
                                    <Col lg={4} md={6} key={item.id}>
                                        <div className="cause-item">
                                            <div className="cause-top">
                                                <div className="cause-img">
                                                    <img src={this.state.basePath+item.image} alt="" />
                                                    <div className="case-btn">
                                                        <Link to={'/project-single/'+item.id} className="theme-btn">View<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cause-text">
                                                <h3><Link to={'/project-single/'+item.id}>{item.title}</Link></h3>
                                                <p>{item.sub_title}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;