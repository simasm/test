import React from 'react'
import axios from 'axios'

import Card from './Card'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const ProductContainer = () => {


    let { id } = useParams();
    var imgUrl = "https://media.karousell.com/media/photos/products/2020/01/23/samsung_basic_keypad_phone_1579753834_f597a219_progressive.jpg";

    if (id === undefined)
        id = 0;
    // console.log("id == ", id);
    const [state, setState] = useState({ products_array: null });

    useEffect(() => {

        const load = async () => {
            try {
                const response = await axios.get(process.env.PUBLIC_URL + "/api/products");
                const products = response.data;
                setState({ products_array: products });
            } catch (err) {
                console.log(err);
            }



        }

        /// console.log("use effect");
        setTimeout(load, 1500);

    }, []);

    //console.log(state.products_array);


    if (state.products_array === null)
        return (<div>Loading...</div>);
    else
        if (id === 0) {

            return (
                <div className="row">
                    {state.products_array.map(prod =>
                        <Card key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            price={prod.price}
                            quantity={prod.quantity}
                            desc={prod.description}
                            viewMode={true}
                            imgUrl={imgUrl} />)}

                </div>

            );
        }
        else

            //    console.log(id);
            return (
                <div className="row justify-content-center">

                    {state.products_array
                        .filter(prod =>
                            prod.id == id)
                        .map(prod =>

                            <Card key={prod.id}
                                id={prod.id}
                                title={prod.title}
                                price={prod.price}
                                quantity={prod.quantity}
                                desc={prod.description}
                                viewMode={false}
                                imgUrl={imgUrl} />)
                    }


                </div>
            );

    //product map);




    //css className ir t.t.

}

export default ProductContainer;