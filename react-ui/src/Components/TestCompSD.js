import React, { Component } from "react";

export default class TestCompSD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 11,
            style : "green",
            intervalID : 0,
            msg : "self destruct in "
         };
    }


    destruction = () => {
        this.setState( {style : "red", msg : "boom", counter : ""});
        
        console.log(this.state.style);
         
        
    }

    reduceCounter = () => {
        if(this.state.counter > 0) {
            this.setState( {counter : this.state.counter - 1});
        }
        else {
            clearInterval(this.state.intervalID);
            this.destruction();
        }
            
            
    }
    componentDidMount = () => {
       let id = setInterval(this.reduceCounter,[1000]);
       this.setState( {intervalID : id});
       // setTimeout(this.setStyle,[this.state.counter * 1000]);
        console.log("componentDidMount");
    }

    render() {
        return (
            <div className="card" style={{ width: 18 + "rem" ,
             background: this.state.style}}>
             
            <div className="card-body">
            <h5 className="card-title">{this.state.counter}</h5>
            <p className="card-text">
                 {this.state.msg}&nbsp;{this.state.counter}
            </p>
            
            </div>
        </div>
        );
        
    }

}