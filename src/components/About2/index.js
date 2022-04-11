import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import abimg4 from '../../assets/images/shape/shape2.png'
import VideoModal from "../ModalVideo";
import '../../assets/css/flaticon.css'
import axios from "../../axios-plugin";
class Index extends Component {
    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            sectionImage: null,
            thumb: null,
            title: null,
            discription: null
        }
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