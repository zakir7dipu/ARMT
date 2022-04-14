import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HeaderTopbar from "../HeaderTopbar";
import './style.css'
import MobileMenu from "../MobileMenu";
import {Link} from "react-router-dom";
class Index extends Component {
    constructor(props) {
        super();
        this.state={
            homeNav: null,
            aboutNav: null,
            projectNav: null,
            contactNav: null,
        }
    }

    componentDidMount() {
        if (window.location.href === window.location.origin+'/#/'){
            this.setState({homeNav: "active",})
        }else if (window.location.href === window.location.origin+'/#/about'){
            this.setState({aboutNav: "active",})
        }else if (window.location.href === window.location.origin+'/#/project'){
            this.setState({projectNav: "active",})
        }else if (window.location.href === window.location.origin+'/#/contact'){
            this.setState({contactNav: "active",})
        }
    }


    render() {
        return (
            <div className="middle-header">
                 <HeaderTopbar phone={this.props.phone} email={this.props.email}/>
                <div className="header-style-3">
                    <Container>
                        <div className="header-content">
                            <Row>
                                <Col lg={3} md={4} sm={4}>
                                    <div className="logo">
                                        <Link to="/" title=""><img src={this.props.logo} alt="logo"/></Link>
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