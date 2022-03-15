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
import axios from "../../axios-plugin";
class Index extends Component {

    constructor() {
        super();
        this.state = {
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

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <footer className="tp-site-footer">
                <div className="tp-upper-footer">
                    <Container>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="widget about-widget">
                                    <div className="footer-logo widget-title">
                                        <Link onClick={this.ClickHandler} to="/"><p>{this.state.about}</p></Link>
                                    </div>
                                    <p></p>
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
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
                            <Col lg={4} md={6} sm={12} className="col-lg-offset-1">
                                <div className="widget market-widget tp-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi flaticon-pin"></i>{this.state.address}</li>
                                            <li><i className="fi flaticon-call"></i>{this.state.phone}</li>
                                            <li><i className="fi flaticon-envelope"></i>{this.state.email}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            {/*<Col lg={3} md={6} sm={12}>*/}
                            {/*    <div className="widget instagram">*/}
                            {/*        <div className="widget-title">*/}
                            {/*            <h3>Instagram</h3>*/}
                            {/*        </div>*/}
                            {/*        <ul className="d-flex">*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n1} alt=""/></Link></li>*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n2} alt=""/></Link></li>*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n3} alt=""/></Link></li>*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n4} alt=""/></Link></li>*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n5} alt=""/></Link></li>*/}
                            {/*            <li><Link onClick={this.ClickHandler} to="/"><img src={n6} alt=""/></Link></li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}
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