import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
// import axios from "axios";
// axios.defaults('http://127.0.0.1:8000/api/')
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
  }
}

export default App;
