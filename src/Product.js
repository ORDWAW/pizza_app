import React from 'react';
import "./Product.css";

const Product = ({id, title, image, price, kind}) => {
    return (
        <div className={"product"}>
            <div className="product__info">
                <h1>{title}</h1>
                <h3>{kind}</h3>
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
