import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../ContactFrom";
import "./style.css"

class Index extends Component {
    render() {
        return (
            <section className="contact-pg-contact-section section-padding">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="section-title-s3 section-title-s5">
                                <h2>Our Contacts</h2>
                            </div>
                            <div className="contact-details">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-location-pin"></i>
                                        </div>
                                        <h5>Our Location</h5>
                                        <p>245 King Street, Touterie Victoria 8520 Australia</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-mobile"></i>
                                        </div>
                                        <h5>Phone</h5>
                                        <p>0-123-456-7890</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-email"></i>
                                        </div>
                                        <h5>Email</h5>
                                        <p>sample@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="contact-form-area">
                                <div className="section-title-s3 section-title-s5">
                                    <h2>Quick Contact Form</h2>
                                </div>
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Index;