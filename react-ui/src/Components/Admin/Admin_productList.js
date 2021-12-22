import React, { useContext } from 'react';
import axios from 'axios';
import { Admin_productListContext } from './Admin_view';

const Admin_productList = () => {

    const { productList, loadProducts } = useContext(Admin_productListContext);

    const deleteProduct = async (id) => {
        
        const response = await axios.delete(process.env.PUBLIC_URL+"/api/products/".concat(id));
         if (response.status < 400) {
            loadProducts();
        }
    }


    if (productList.products_array !== null)
        return (

            <ol className="conainer   ">
                <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col border ">id</div>
                    <div className="col border ">title</div>
                    <div className="col  border">price</div>
                    <div className="col border ">quantity</div>
                    <div className="col border">action</div>
                </li>
                {productList.products_array.map(product =>
                    <li className="row justify-content-evenly bg-light" key={product.id}>
                        <div className="col m-2 ">
                            {product.id} </div>
                        <div className="col m-2">
                            {product.title}    </div>
                        <div className="col m-2">
                            {product.price}   </div>
                        <div className="col m-2">
                            {product.quantity}   </div>
                        <div className="col btn m-2 btn-secondary btn-sm"
                            onClick={() => deleteProduct(product.id)}>Delete</div>
                    </li>)}
            </ol>




        );
    else
        return <> loading...</>;
}
export default Admin_productList;