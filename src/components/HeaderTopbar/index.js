import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import './style.css'
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <div className="topbar">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-intro">
                                <ul>
                                    <li><i className="fi flaticon-call"></i>+000123456789</li>
                                    <li><i className="fi flaticon-envelope"></i> khairah@gmail.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-intro float-lg-end">
                                <ul>
                                    <li><Link className="topNavSocialIcon" to="#"><i className="ti-facebook"></i></Link></li>
                                    <li><Link className="topNavSocialIcon" to="#"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link className="topNavSocialIcon" to="#"><i className="ti-instagram"></i></Link></li>
                                    <li><Link className="topNavSocialIcon" to="#"><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;