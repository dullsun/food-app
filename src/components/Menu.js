import React, {Component} from 'react';
import Burger1 from './../assets/1.jpg';
import Burger2 from './../assets/2.jpg';
import Burger3 from './../assets/3.jpg';
import Burger4 from './../assets/4.jpg';
import Burger5 from './../assets/5.jpg';
import Burger6 from './../assets/6.jpg';
import App from "../App";

class Menu extends Component {
    constructor() {
        super();


    }
    render() {

        // Whatever is returned is rendered
        return (
            <div className="container">
                <div className="card" style={{'width': '18rem'}}>
                    <img src={this.state.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <p className="card-text">{this.state.desc}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{this.state.price}</small>
                        </div>
                </div>
            </div>
        )
    }

}
export default Menu;
