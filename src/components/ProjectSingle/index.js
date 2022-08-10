import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";

class Index extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Fragment dangerouslySetInnerHTML={{__html: this.props.description}}>
                <div className="case-area section-padding" >
                    <Container id="projectDetails" dangerouslySetInnerHTML={{__html: this.props.description}} />
                    {/* <Container>{this.props.description}</Container> */}
                </div>
                
            </Fragment>
        );
        // this.projectDetailsView()
    }
}

export default Index;