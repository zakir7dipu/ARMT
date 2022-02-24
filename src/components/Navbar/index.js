import React, {Component} from 'react';
import Header from "../Header";

class Index extends Component {

    constructor() {
        super();
        this.state={
            scrollNav: "fixed-navbar"
        }
    }

    onscroll = () =>{
        if (window.scrollY > 80){
            this.setState({scrollNav:"fixed-navbar animated fadeInDown active"})
        }else if (window.scrollY < 80){
            this.setState({scrollNav: "fixed-navbar"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onscroll)
    }

    render() {
        return (
            <div className={this.state.scrollNav}>
                <Header />
            </div>
        );
    }
}

export default Index;