import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class Index extends Component {

    constructor(props) {
        super();
    }
//     on={()=>{
//     console.log('ok')
//     document.querySelector('#projectDetails').innerHTML = this.props.description
// // }}

    render() {
        return (
            <Fragment>
                <div className="case-area section-padding" >
                    <Container id="projectDetails" dangerouslySetInnerHTML={{__html: this.props.description}}>

                    </Container>
                </div>
            </Fragment>
        );
        this.projectDetailsView()
    }
}

export default Index;