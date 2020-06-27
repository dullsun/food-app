import React from "react";

function Order (props){
let name = props.name;
let img = props.img;
let desc = props.desc;
let id = props.id;

        return(
                <div className="card" key={id} style={{"width": "18rem"}}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        {/*<a href="#" className="card-link">Card link</a>*/}
                        {/*<a href="#" className="card-link">Another link</a>*/}
                    </div>
                </div>

        );

}
export default Order;
