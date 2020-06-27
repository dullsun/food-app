import React, {Component} from 'react';
import Burger1 from "../assets/1.jpg";
import Burger2 from "../assets/2.jpg";
import Burger3 from "../assets/3.jpg";
import Burger4 from "../assets/4.jpg";
import Burger5 from "../assets/5.jpg";
import Burger6 from "../assets/6.jpg";
import Order from "./Order"
import {Button} from "react-bootstrap";

class Menu extends Component{
    constructor() {
        super();
    this.state = {
        menuList : [
            {
                "id": 0, "name": "Chicken Burger", "img": Burger1, "desc":"Chicken burger made with Awesome Content.!", "price": "$3.99"
            },
            {
                "id": 1, "name": "Beef Burger", "img": Burger2, "desc":"Beef burger made with Awesome Content.!", "price": "$4.99"
            },
            {
                "id": 2, "name": "Fish Burger", "img": Burger3, "desc":"Fish burger made with Awesome Content.!", "price": "$6.99"
            },
            {
                "id": 3, "name": "Ham Burger", "img": Burger4, "desc":"Ham burger made with Awesome Content.!", "price": "$7.99"
            },
            {
                "id": 4, "name": "Chicken Teriyaki Burger", "img": Burger5, "desc":"Chicken teriyaki burger made with Awesome Content.!", "price": "$10.99"
            },
            {
                "id": 5, "name": "Chicken Cheese Burger", "img": Burger6, "desc":"Chicken Cheese burger made with Awesome Content.!", "price": "$9.99"
            }

        ],
        compare: {
            arr: []
        }
    }
        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(e) {
        let arrnew = this.state.compare.arr;
let menu = this.state.menuList;
        let index = this.state.menuList.findIndex(x => x.id === e.target.id);
        if (index !== -1) {
            arrnew.splice(index, 1)
        }
        else {
            if (arrnew.includes(index) === false)
            {
                arrnew.push(e.target.id)
            }

        }
        // console.log(event)
        this.setState({ compare: { arr: arrnew } });

        console.log(this.state.compare.arr);
        let output = Object.keys(this.state.menuList).map(
            i => this.state.menuList[i]
        );

    }


    render() {

        return(
            <div className="container-fluid">
                <div className="row">
                    {this.state.menuList.map((menuList, index) => (
                    <div className="col-md-4" key={menuList.id}>
                        <div className="card mb-3" style={{"max-width": "540px"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={menuList.img} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{menuList.name}</h5>
                                        <p className="card-text">{menuList.desc}</p>
                                        <p className="card-text">
                                            <Button className="bg-primary" style={{"color": "white"}} onClick={this.handleClick} id={menuList.id}>{menuList.price}</Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
                </div>
        <div className="col-md-12">
            {this.state.compare.arr.map((props) => {
                return(<Order name={this.state.menuList[props].name} img={this.state.menuList[props].img} desc={this.state.menuList[props].desc} id={this.state.menuList[props].id}/>)
            })}


</div>
            </div>
        )
    }
}

export default Menu;
