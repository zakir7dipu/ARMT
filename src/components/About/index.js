import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import abimg from '../../assets/images/about/img-1.jpg'
import abimg2 from '../../assets/images/about/1.png'
import abimg3 from '../../assets/images/about/2.png'
import abimg4 from '../../assets/images/shape/shape2.png'
import './style.css'
import {Link} from "react-router-dom";

class Index extends Component {

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <div className="about-area">
                <Container>
                    {/*col-lg-5 col-md-12  grid col-12*/}
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="about-cercle">
                                <div className="about-img">
                                    <img src={abimg} alt="" />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={12} className="offset-lg-1 grid">
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
                                        <Row>
                                            <Col lg={6} className="p-1">
                                                <div className="about-icon-item">
                                                    <div className="ab-icon">
                                                        <img draggable="false" src={abimg2} alt="" />
                                                    </div>
                                                    <div className="ab-text">
                                                        <h2><Link onClick={this.ClickHandler} to="/">Save  Children.</Link></h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} className="p-1">
                                                <div className="about-icon-item">
                                                    <div className="ab-icon ab-icon2">
                                                        <img draggable="false" src={abimg3} alt="" />
                                                    </div>
                                                    <div className="ab-text">
                                                        <h2><Link onClick={this.ClickHandler} to="/">Fresh And  Clean Water.</Link></h2>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
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