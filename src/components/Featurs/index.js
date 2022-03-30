import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featuresimg from '../../assets/images/features/img-1.png'
import featuresimg2 from '../../assets/images/features/img-2.png'
import featuresimg3 from '../../assets/images/features/img-3.png'
import featuresimg4 from '../../assets/images/features/img-4.png'
import './style.css'
import {Link} from "react-router-dom";
class Index extends Component {

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <div className="features-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={12} sm={12}>
                            <div className="features-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>FEATURES</span>
                                    </div>
                                </div>
                                <h2>The great journey to end poverty for good begins with a child.</h2>
                                <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point that it has.</p>
                                <Link to="/about" className="theme-btn">See More<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>
                        </Col>

                        <Col lg={7} md={12} sm={12}>
                            <div className="features-wrap">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img draggable="false" src={featuresimg} alt="" />
                                            </div>
                                            <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Cancer Treatment</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item-2">
                                            <div className="features-icon">
                                                <img draggable="false" src={featuresimg2} alt="" />
                                            </div>
                                            <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Hospital Build</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item-2 active">
                                            <div className="features-icon">
                                                <img draggable="false" src={featuresimg3} alt="" />
                                            </div>
                                            <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Environtment Recyle</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img draggable="false" src={featuresimg4} alt="" />
                                            </div>
                                            <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Food & Build Home</Link></h2>
                                            </div>
                                        </div>
                                    </div>
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