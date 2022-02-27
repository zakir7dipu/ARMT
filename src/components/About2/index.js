import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import abimg from '../../assets/images/about.jpg'
import abimg2 from '../../assets/images/about/1.png'
import abimg3 from '../../assets/images/about/2.png'
import abimg4 from '../../assets/images/shape/shape2.png'
import VideoModal from "../ModalVideo";
import {Link} from "react-router-dom";
import '../../assets/css/flaticon.css'
class Index extends Component {
    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <div className="about-area section-padding">
                <Container>
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="video-area">
                                <img src={abimg} alt="" />
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12} className="grid">
                            <div className="about-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>ABOUT US</span>
                                    </div>
                                    <h2>Khairah is <span>Nonprofit</span> Organization <span>For Help</span> Children.</h2>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by thethe readable content off a page when looking at its layout point using Lorem Ipsum is that it has.</p>
                                <div className="ab-icon-area">
                                    <div className="about-icon-wrap">
                                        <div className="about-icon-item">
                                            <div className="ab-icon">
                                                <img draggable="false" src={abimg2} alt="" />
                                            </div>
                                            <div className="ab-text">
                                                <h2><Link onClick={this.ClickHandler} to="/">Save  Children.</Link></h2>
                                            </div>
                                        </div>
                                        <div className="about-icon-item">
                                            <div className="ab-icon ab-icon2">
                                                <img draggable="false" src={abimg3} alt="" />
                                            </div>
                                            <div className="ab-text">
                                                <h2><Link onClick={this.ClickHandler} to="/">Fresh And  Clean Water.</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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