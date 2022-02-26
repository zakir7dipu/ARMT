import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import causesimg from '../../assets/images/cause/img-1.png'
import causesimg2 from '../../assets/images/cause/img-2.jpg'
import causesimg3 from '../../assets/images/cause/img-3.jpg'
import './style.css'
class Index extends Component {

    constructor() {
        super();
    }

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <div className="case-area section-padding">
                <Container>
                    <Col lg={6} className="offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>CAUSES</span>
                            </div>
                            <h2>Latest Caused of Khairah.</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <img src={causesimg} alt="" />
                                        <div className="case-btn">
                                            <Link onClick={this.ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/">GOAL : $9860</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/">RISED : $768</Link></li>
                                    </ul>
                                    <h3><Link onClick={this.ClickHandler} to="/case-single">Financial Help for Poor Families</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <img src={causesimg2} alt="" />
                                        <div className="case-btn">
                                            <Link onClick={this.ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/">GOAL : $9860</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/">RISED : $768</Link></li>
                                    </ul>
                                    <h3><Link onClick={this.ClickHandler} to="/case-single">Education for Poor Children</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <img src={causesimg3} alt="" />
                                        <div className="case-btn">
                                            <Link onClick={this.ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/">GOAL : $9860</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/">RISED : $768</Link></li>
                                    </ul>
                                    <h3><Link onClick={this.ClickHandler} to="/case-single">Education for Poor Children</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;