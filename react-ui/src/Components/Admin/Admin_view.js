import React from 'react';
import Admin_productList from './Admin_productList';
import Admin_productAddForm from './Admin_productAddForm';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export const Admin_productListContext = React.createContext(
    {});

const Admin_view = () => {

    const [productList, setProductList] = useState({ products_array: null });

   // console.log("pub url "+ process.env.PUBLIC_URL);

    const loadProducts = async () => {
        const response = await axios.get("api/products");
        const products = response.data;
        setProductList({ products_array: products });

    }

    useEffect(() => {

        loadProducts();

    }, []);


    return (
        <Admin_productListContext.Provider value={{ productList: productList, setProductList, loadProducts }}>
            <div className="container pt-2 ">
                <div className="row justify-content-evenly  ">
                    <div className="col-7  ">

                        <Admin_productList />
                    </div>
                    <div className="col-4  ">
                        <Admin_productAddForm  />
                    </div>
                </div>
            </div>
        </Admin_productListContext.Provider>
    );

}
export default Admin_view;