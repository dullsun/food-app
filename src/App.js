import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import './App.css';
import Menu from "./components/Menu.js";
import logo from "./assets/walmart-logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Burger1 from "./assets/1.jpg";
import Burger2 from './assets/2.jpg';
import Burger3 from './assets/3.jpg';
import Burger4 from './assets/4.jpg';
import Burger5 from './assets/5.jpg';
import Burger6 from './assets/6.jpg';



class App extends Component {
    constructor() {
        super();
        this.state = {
            "name": "Chicken Burger", "img": Burger1, "desc":"Chicken burger made with Awesome Content.!", "price": "$3.99"
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <div className="sidenav">
                            <Link to="/Menu">MENU</Link>
                            <Link to="/Order">ORDER</Link>
                            <Link to="/FindUs">FIND US</Link>
                            <Link to="/Contact">CONTACT</Link>
                            <img src={logo} className="App-Logo" alt="walmart logo"/>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <Route path="/" />
                        <Route path="/Menu" component={Menu} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
