import React, { Component } from "react";

export default class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testvar : 1
         };
    }


    handleClick = (event) => {
        event.preventDefault();
        this.setState(   { testvar : this.state.testvar + 1}) ;
        console.log(this.state.testvar);


    }

    static getDerivedStateFromProps   (props, state)  {
        console.log("getDerivedStateFromProps");
        return { testvar : state.testvar};
    }

    static componentDidMount = () => {
        console.log("componentDidMount");
    }


    static componentDidUnmount = () => {
        console.log("componentDidUnmount");
    }

    render() {
        return (
            <div>
                 {this.state.testvar} &nbsp; 
                <button className="btn btn-primary"
                    onClick={this.handleClick}> PressMe 
                </button>

            </div>
        );
    
    }

}