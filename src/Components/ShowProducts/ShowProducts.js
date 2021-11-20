import React from "react";
import SingleProduct from "./SingleProduct";
import "./ShowProducts.css";
const ShowProducts = (props) => {
    return(
        <div className="product_list_row">
             {props.products.map((product) =>{
            return(
                <SingleProduct
                key = {product.id}
                title = {product.title}
                price = {product.price}
            />
            );
           })}
        </div>
    );
};
export default ShowProducts;