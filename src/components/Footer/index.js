import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Logo from '../../assets/images/logo/logo.png'
import n1 from '../../assets/images/instragram/1.jpg'
import n2 from '../../assets/images/instragram/2.jpg'
import n3 from '../../assets/images/instragram/3.jpg'
import n4 from '../../assets/images/instragram/4.jpg'
import n5 from '../../assets/images/instragram/5.jpg'
import n6 from '../../assets/images/instragram/6.jpg'
import './style.css'
import {Link} from "react-router-dom";
class Index extends Component {

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <footer className="tp-site-footer">
                <div className="tp-upper-footer">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <div className="widget about-widget">
                                    <div className="footer-logo widget-title">
                                        <Link onClick={this.ClickHandler} to="/"><img src={Logo} alt="logo"/>Khai<span>rah.</span></Link>
                                    </div>
                                    <p>Build and Earn with your online store with lots of cool and exclusive tp-features </p>
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={12}>
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/project">Projects</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="col-lg-offset-1">
                                <div className="widget market-widget tp-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <p>online store with lots of cool and exclusive tp-features</p>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi flaticon-pin"></i>28 Street, New York City, USA</li>
                                            <li><i className="fi flaticon-call"></i>+000123456789</li>
                                            <li><i className="fi flaticon-envelope"></i>khairah@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="widget instagram">
                                    <div className="widget-title">
                                        <h3>Instagram</h3>
                                    </div>
                                    <ul className="d-flex">
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n1} alt=""/></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n2} alt=""/></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n3} alt=""/></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n4} alt=""/></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n5} alt=""/></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><img src={n6} alt=""/></Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="tp-lower-footer">

                </div>
            </footer>
        );
    }
}

export default Index;