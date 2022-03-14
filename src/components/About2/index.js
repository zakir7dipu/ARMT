import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import abimg from '../../assets/images/about.jpg'
import abimg2 from '../../assets/images/about/1.png'
import abimg3 from '../../assets/images/about/2.png'
import abimg4 from '../../assets/images/shape/shape2.png'
import VideoModal from "../ModalVideo";
import {Link} from "react-router-dom";
import '../../assets/css/flaticon.css'
import axios from "../../axios-plugin";
class Index extends Component {
    constructor() {
        super();
        this.state = {
            basePath: "http://127.0.0.1:8000",
            sectionImage: null,
            thumb: null,
            title: null,
            discription: null
        }
    }

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    componentDidMount() {
        axios.get(`/api/app/about`)
            .then(res => {
                this.setState({
                    thumbImage: res.data.thumb_image,
                    thumb: res.data.thumb,
                    title: res.data.title,
                    discription: res.data.description,
                    videoId: res.data.video_id,
                })
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        });
    }

    aboutPageDescription = () => {
        document.querySelector('.aboutPageDescription').innerHTML = this.state.discription;
    }

    render() {
        return (
            <div className="about-area section-padding" onLoad={this.aboutPageDescription}>
                <Container>
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="video-area">
                                <img src={this.state.basePath+this.state.thumbImage} alt="" />
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal video={this.state.videoId}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12} className="grid">
                            <div className="about-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.thumb}</span>
                                    </div>
                                    <h2>{this.state.title}</h2>
                                </div>
                                <p className="aboutPageDescription"></p>
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