import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import event1 from '../../assets/images/event/1.jpg'
import event2 from '../../assets/images/event/2.jpg'
import event3 from '../../assets/images/event/3.jpg'

import './style.css'
import {Link} from "react-router-dom";
class Index extends Component {

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    render() {
        return (
            <div className="event-area section-padding">
                <Container>
                    <Row>
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-title section-title2 text-center">
                                <div className="thumb-text">
                                    <span>EVENTS</span>
                                </div>
                                <h2>Our Upcoming Events</h2>
                                <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <Col>
                            <div className="event-item">
                                <div className="event-img">
                                    <img src={event1} alt="" />
                                </div>
                                <div className="event-text">
                                    <div className="event-left">
                                        <div className="event-l-text">
                                            <span>MAR</span>
                                            <h4>28</h4>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <ul>
                                            <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                            <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                        </ul>
                                        <h2><Link onClick={this.ClickHandler} to="/">Fundrising event that could change some poor children.</Link></h2>
                                        <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-img">
                                    <img src={event2} alt="" />
                                </div>
                                <div className="event-text">
                                    <div className="event-left">
                                        <div className="event-l-text">
                                            <span>MAR</span>
                                            <h4>28</h4>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <ul>
                                            <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                            <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                        </ul>
                                        <h2><Link onClick={this.ClickHandler} to="/">Many Children are suffering a lot for food.</Link></h2>
                                        <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-img">
                                    <img src={event3} alt="" />
                                </div>
                                <div className="event-text">
                                    <div className="event-left">
                                        <div className="event-l-text">
                                            <span>MAR</span>
                                            <h4>28</h4>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <ul>
                                            <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                            <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                        </ul>
                                        <h2><Link onClick={this.ClickHandler} to="/">Be kind for the poor people and the kids.</Link></h2>
                                        <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
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