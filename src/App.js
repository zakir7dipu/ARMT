import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

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
