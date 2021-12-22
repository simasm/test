import React from 'react';
import AdminProductList from './AdminProductList';
import AdminProductAddForm from './AdminProductAddForm';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export const AdminProductListContext = React.createContext(
    {});

const AdminView = () => {

    const [productList, setProductList] = useState({ products_array: null });

    // console.log("pub url "+ process.env.PUBLIC_URL);


    const loadProducts = async () => {

        try {
            const response = await axios.get(process.env.PUBLIC_URL + "/api/products");
            const products = response.data;
            setProductList({ products_array: products });
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {

        loadProducts();

    }, []);


    return (
        <AdminProductListContext.Provider value={{ productList: productList, setProductList, loadProducts }}>
            <div className="container pt-2 ">
                <div className="row justify-content-evenly  ">
                    <div className="col-7  ">

                        <AdminProductList />
                    </div>
                    <div className="col-4  ">
                        <AdminProductAddForm />
                    </div>
                </div>
            </div>
        </AdminProductListContext.Provider>
    );

}
export default AdminView;