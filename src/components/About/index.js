import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import abimg4 from '../../assets/images/shape/shape2.png'
import './style.css'
import axios from "../../axios-plugin";

class Index extends Component {

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            sectionImage: null,
            thumb: null,
            title: null,
            discription: null
        }
    }

    componentDidMount() {
        axios.get(`/api/app/about`)
            .then(res => {
                this.setState({
                    sectionImage: res.data.image,
                    thumb: res.data.thumb,
                    title: res.data.title,
                    discription: res.data.description,
                })
            }).catch(err => {
            console.log(err)
        });
    }

    aboutSectionDescription = () => {
        document.querySelector('.aboutSectionDescription').innerHTML = this.state.discription;
    }

    render() {
        return (
            <div className="about-area" onLoad={this.aboutSectionDescription}>
                <Container>
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="about-cercle">
                                <div className="about-img">
                                    <img src={this.state.basePath+this.state.sectionImage} alt="" />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={12} className="offset-lg-1 grid">
                            <div className="about-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.thumb}</span>
                                    </div>
                                    <h2>{this.state.title}</h2>
                                </div>
                                <p className="aboutSectionDescription"></p>
                                {/*<div className="ab-icon-area">*/}
                                {/*    <div className="about-icon-wrap">*/}
                                {/*        <Row>*/}
                                {/*            <Col lg={6} className="p-1">*/}
                                {/*                <div className="about-icon-item">*/}
                                {/*                    <div className="ab-icon">*/}
                                {/*                        <img draggable="false" src={abimg2} alt="" />*/}
                                {/*                    </div>*/}
                                {/*                    <div className="ab-text">*/}
                                {/*                        <h2><Link onClick={this.ClickHandler} to="/">Save  Children.</Link></h2>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </Col>*/}
                                {/*            <Col lg={6} className="p-1">*/}
                                {/*                <div className="about-icon-item">*/}
                                {/*                    <div className="ab-icon ab-icon2">*/}
                                {/*                        <img draggable="false" src={abimg3} alt="" />*/}
                                {/*                    </div>*/}
                                {/*                    <div className="ab-text">*/}
                                {/*                        <h2><Link onClick={this.ClickHandler} to="/">Fresh And  Clean Water.</Link></h2>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </Col>*/}
                                {/*        </Row>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="ab-shape">
                    <img src={abimg4} alt="" />
                </div>
            </div>
        );
    }
}

export default Index;