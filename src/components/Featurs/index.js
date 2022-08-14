import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featuresimg from '../../assets/images/features/aahar-final-logo.png'
import featuresimg2 from '../../assets/images/features/Abdur-Rahim-Health-Care-Center-Final-Logo-14.08.2022.png'
import featuresimg3 from '../../assets/images/features/ABDUR-RAHIM-MEMORIAL-TRUST-Ambulance-service.png'
import featuresimg4 from '../../assets/images/features/ABDUR-RAHIM-MEMORIAL-TRUST-Water-Project.png'
import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";

class Index extends Component {

    constructor() {
        super();

        this.state = {
            sectionTitle: '',
            sectionDescription: '',
            buttonText: '',
            buttonUrl: '',
        }
    }

    getData = () => {
        axios.get(`/api/app/feature-section`)
            .then(res => {
                this.setState({
                    sectionTitle: res.data.thumb,
                    sectionDescription: res.data.description,
                    buttonText: res.data.button_text,
                    buttonUrl: res.data.button_url
                })
            }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getData()
    }

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
                                {/* <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.sectionTitle}</span>
                                    </div>
                                </div> */}
                                <div className="featureSectionDescription text-light" dangerouslySetInnerHTML={{__html: this.state.sectionDescription}} />
                                {/*<ul className="text-light">*/}
                                {/*    <li><p className="m-0"><BiChevronsRight/> To ensure Safe Water & Food</p></li>*/}
                                {/*    <li><p className="m-0"><BiChevronsRight/>To provide Health Care Service</p></li>*/}
                                {/*    <li><p className="m-0"><BiChevronsRight/>To offer Ambulance and Hearse Services</p></li>*/}
                                {/*    <li><p className="m-0"><BiChevronsRight/>To uplift quality of life</p></li>*/}
                                {/*</ul>*/}
                                {/*<h5 className="text-light mt-4">Vision</h5>*/}
                                {/*<p> Help the People In need</p>*/}
                                {/*<h5 className="text-light">Mission</h5>*/}
                                {/*<p> To go many extra miles to ensure healthy and meaningful life for all.</p>*/}
                                <a href={this.state.buttonUrl} target="_blank" className="theme-btn" rel="noreferrer">{this.state.buttonText}<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                {/*<Link to="/about" className="theme-btn">See More</Link>*/}
                            </div>
                        </Col>

                        <Col lg={7} md={12} sm={12}>
                            <div className="features-wrap">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img className='features-icon-img' draggable="false" src={featuresimg} alt="" />
                                            </div>
                                            {/* <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Safe Water Projects</Link></h2>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item-2">
                                            <div className="features-icon">
                                                <img className='features-icon-img' draggable="false" src={featuresimg2} alt="" />
                                            </div>
                                            {/* <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Health for Those in Need</Link></h2>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item-2">
                                        {/* active */}
                                            <div className="features-icon">
                                                <img className='features-icon-img' draggable="false" src={featuresimg3} alt="" />
                                            </div>
                                            {/* <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Ambulance Services</Link></h2>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img className='features-icon-img' draggable="false" src={featuresimg4} alt="" />
                                            </div>
                                            {/* <div className="features-content">
                                                <h2><Link onClick={this.ClickHandler} to="/">Food Drives</Link></h2>
                                            </div> */}
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