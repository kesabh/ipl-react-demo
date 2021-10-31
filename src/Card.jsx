import React from "react";

const Card = () => {
    return ( 
        <>
            <div class="card" style={{width: "18rem"}}>
              <img src={this.props.img} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> {this.props.record} </li>
              </ul>
                <p class="card-text">{this.props.desc}</p>
              </div>
            </div>
        </>
     );
}
 
export default Card;