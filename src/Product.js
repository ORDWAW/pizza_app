import React from 'react';
import "./Product.css";

const Product = ({id, title, image, price}) => {
    return (
        <div className={"product"}>
            <div className="product__info">
                <h1>{title}</h1>
                <p className={"product__price"}>
                    <strong>{price}</strong>
                    <small>PLN</small>
                </p>
            </div>
            <img src={image}
                 alt={"pizza"}/>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;
