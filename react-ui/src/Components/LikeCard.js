import React, { Component } from "react";
 


import 'bootstrap/dist/css/bootstrap.min.css';

const people = [
    {
      name: 'James',
      age: 17,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 5,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

class LikeCard extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            hate: 0,
            taskTitle: "Post",
            likeBtn: "Like ",
            hateBtn: "Hate ",
            resetBtn: "Reset"
        }
    }
    pressLike = () => {
        this.setState(({like}) =>({
          like: like + 1
        }));
    };
    pressHate = () => {
        this.setState(({hate}) =>({
          hate: hate + 1
        }));
    };
    pressReset = () => {
      this.setState(() =>({
        like: 0,
        hate: 0
      }));
    };
    render() {
        return (
           

          <div className="card" style={{ width: 30 + "em"}}>

            <ul>
                {people.filter(age => age > 17)
                .map(pers=>(<li> {pers.name}</li>))}
             </ul>   

            <img
              src=""
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.taskTitle}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the 
                card title and make up the bulk of the card's content. Some quick
                example text to build on the card title and make up the bulk of the 
                card's content.
              </p>
              <button
                className={"btn btn-success m-2"}
                onClick={this.pressLike}
              >
              {this.state.likeBtn}
              {this.state.like}
              </button>
              <button
                className={"btn btn-danger m-2"}
                onClick={this.pressHate}
              >
              {this.state.hateBtn}
              {this.state.hate}
              </button>
              <button
                className={"btn btn-info m-2"}
                onClick={this.pressReset}
              >
                {this.state.resetBtn}
              </button>
            </div>
          </div>
        );
    }
}
export default LikeCard;