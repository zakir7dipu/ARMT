import React, { Component, Fragment } from 'react';
import "./pageloaderstyle.css";

class PageLoad extends Component {

    componentDidMount() {
        console.log()
    }

    render() {
        return (
            <div className="pagePreLoader">
                <img src={`${__dirname}giphy.gif`} alt='Loding'/>
            </div>
        );
    }
}

export default PageLoad;