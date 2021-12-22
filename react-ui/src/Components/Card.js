import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import DetailsButton from "./DetailsButton";
 
import AddToCartButton from "./AddToCartButton";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      id: this.props.id,
      cardTitle: this.props.title,
      cardPrice: this.props.price,
      cardQuantity: this.props.quantity,
      imageUrl: this.props.imgUrl,
      cardDesc: this.props.desc,
      buttonTitle: "Details",
      viewMode: this.props.viewMode
    };
  }

   

  cardClick = () => {

  }

  render() {
    return (
      <div className="card m-2" style={{ width: 18 + "rem" }}>
        <img
          src={this.state.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.cardTitle}</h5>
          <p className="card-text">
            <span>Price {this.state.cardPrice} </span>
            <span>Quantity {this.state.cardQuantity} </span>
            <span> {this.state.cardDesc} </span>
          </p>


          <DetailsButton viewMode={this.props.viewMode} 
                         id={this.state.id} />

          <AddToCartButton id={this.state.id}/>
     

        </div>
      </div>
    );
  }
}
export default Card;