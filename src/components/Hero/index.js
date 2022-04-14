import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'
import {Container} from "react-bootstrap";
import axios from "../../axios-plugin";


class Hero extends Component {

    constructor() {
        super();

        this.state = {
            basePath: process.env.React_App_Base_Url,
            sliders: []
        }
    }

    componentDidMount() {
        axios.get(`/api/app/slider`)
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
                                        <div className="slide-title">
                                            <h2>{item.title}</h2>
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