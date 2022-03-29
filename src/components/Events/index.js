import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import event1 from '../../assets/images/event/1.jpg'
// import event2 from '../../assets/images/event/2.jpg'
// import event3 from '../../assets/images/event/3.jpg'

import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";
class Index extends Component {

    allMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            events: []
        }
    }

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    componentDidMount() {
        axios.get(`/api/app/events`)
            .then(res => {
                this.setState({events: res.data})
            }).catch(err => {
            console.log(err)
        })
    }

    dateParser = (value) => {
        let date = new Date(value);
        return {
            day: date.getDate() < 10 ? '0'+date.getDate():date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        }
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
                                <h2>Our Running Events</h2>
                                {/*<p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>*/}
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <Col>
                            {
                                this.state.events.map(item => {
                                    return(
                                        <div className="event-item" key={item.id}>
                                            <div className="event-img">
                                                <img src={this.state.basePath+item.image} alt="" />
                                            </div>
                                            <div className="event-text">
                                                <div className="event-left">
                                                    <div className="event-l-text">
                                                        <span>{this.allMonth[this.dateParser(item.date).month]}</span>
                                                        <h4>{this.dateParser(item.date).day}</h4>
                                                        <span>{this.dateParser(item.date).year}</span>
                                                    </div>
                                                </div>
                                                <div className="event-right">
                                                    <ul>
                                                        {/*<li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>*/}
                                                        <li><i className="ti-location-pin"></i> {item.location}</li>
                                                    </ul>
                                                    <h2><Link onClick={this.ClickHandler} to="/">{item.title}.</Link></h2>
                                                    {/*<p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>*/}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;