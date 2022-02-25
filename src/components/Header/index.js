import React, {Component} from 'react';

import Logo from '../../assets/images/logo/logo.png'
import {Col, Container, Row} from "react-bootstrap";
import HeaderTopbar from "../HeaderTopbar";
import './style.css'
import MobileMenu from "../MobileMenu";
import {Link} from "react-router-dom";
class Index extends Component {
    constructor() {
        super();
        this.state={
            homeNav: null,
            aboutNav: null,
            projectNav: null,
            contactNav: null,
        }
    }

    componentDidMount() {
        if (window.location.pathname === '/'){
            this.setState({homeNav: "active",})
        }else if (window.location.pathname === '/about'){
            this.setState({aboutNav: "active",})
        }else if (window.location.pathname === '/project'){
            this.setState({projectNav: "active",})
        }else if (window.location.pathname === '/contact'){
            this.setState({contactNav: "active",})
        }
    }


    render() {
        return (
            <div className="middle-header">
                 <HeaderTopbar/>
                <div className="header-style-3">
                    <Container>
                        <div className="header-content">
                            <Row>
                                <Col lg={3} md={4} sm={4}>
                                    <div className="logo">
                                        <Link to="/" title=""><img src={Logo} alt=""/> Khairah</Link>
                                    </div>
                                </Col>
                                
                                <Col lg={8} className="d-lg-block d-none">
                                    <nav>
                                        <ul>
                                            <li><Link className={this.state.homeNav} to="/" title="">Home</Link>
                                            </li>
                                            <li><Link className={this.state.aboutNav} to="/about" title="">About</Link></li>
                                            <li><Link className={this.state.projectNav} to="/project" title="">Projects</Link></li>
                                            <li><Link className={this.state.contactNav} to="/contact" title="">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </Col>
                                <Col md={2} sm={2}>
                                    <MobileMenu/>
                                </Col>
                            </Row>
                            <div className="clearfix"></div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Index;