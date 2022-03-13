import React, { Component } from "react";
import Slider from "react-slick";
// import { Link } from 'react-router-dom'

import hero1 from '../../assets/images/slider/slide-1.jpg'
import hero2 from '../../assets/images/slider/slide-2.jpg'
import hero3 from '../../assets/images/slider/slide-3.jpg'
import hero4 from '../../assets/images/shape/shape.png'

import './style.css'
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";



class Hero extends Component {

    constructor() {
        super();

        this.state = {
            basePath: "http://127.0.0.1:8000",
            sliders: []
        }
    }

    componentDidMount() {
        axios.get(`${this.state.basePath}/api/app/slider`)
            .then(res => {
                this.setState({sliders: res.data})
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero-slider hero-style-1">
                <Slider {...settings}>
                    {this.state.sliders.map(item => {
                        return(
                            <div className="slide" key={item.id}>
                                <div className="slide-inner" style={{ backgroundImage: `url(${this.state.basePath+item.image})`}}>
                                    <Container>
                                        <div className="slide-thumb">
                                            <span>{item.thumb}</span>
                                        </div>
                                        <div className="slide-title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>{item.sub_title}</p>
                                        </div>
                                        {
                                            item.btn_text?`<div  className="slide-btns">\\n' +
                                                '                                            <Link to="${item.btn_url}" className="theme-btn">${item.btn_text}<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>\\n' +
                                                '                                        </div>`:''
                                        }

                                    </Container>
                                    <div className="slide-shape">
                                        <img src={this.state.basePath+item.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </section>
        )
    }
}

export default Hero;