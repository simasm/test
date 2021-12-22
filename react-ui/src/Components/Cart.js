import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import axios from "axios";
import IncreaseDecrease from "./IncreaseDecrease";




const Cart = () => {
    let { appState } = useContext(UserContext);
    const [state, setState] = useState({ products_array: null });

    useEffect(() => {

        const load = async () => {
            try {
                const response = await axios.get(process.env.PUBLIC_URL + "/api/products");
                const products = response.data;


                setState({ products_array: products });
            }
            catch (err) {
                console.log(err);
            }
        }

        /// console.log("use effect");
        setTimeout(load, 1500);

    }, []);

    const deleteProduct = () => {

    }

    const cartNr = () => {

    }

    if (state.products_array !== null)
        return (<div>cart {appState.username} &nbsp; { }
            <ol className="conainer   ">
                <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col border ">id</div>
                    <div className="col border ">title</div>
                    <div className="col  border">price</div>
                    <div className="col border ">quantity</div>
                    <div className="col border">action</div>
                </li>
                {/* {state.products_array.filter(product => appState.cart.includes(product.id)).map(product =>
                    <li className="row justify-content-evenly bg-light" key={}>
                        <div className="col m-2 ">
                            {product.id} </div>
                        <div className="col m-2">
                            {product.title}    </div>
                        <div className="col m-2">
                            {product.price}   </div>
                        <div className="col m-2">
                            {product.quantityt}   </div>
                        <div className="col btn m-2 btn-secondary btn-sm"
                            onClick={() => deleteProduct(product)}>Delete</div>
                    </li>)} */}
                {JSON.stringify(appState.cart)}

            </ol>

        </div>);
    else
        return <>  </>;
}


export default Cart;