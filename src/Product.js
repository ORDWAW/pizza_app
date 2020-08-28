import React from 'react';
import "./Product.css";
import Button from "@material-ui/core/Button";

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
                <Button size={"medium"}
                        variant={"contained"}
                        color={"disabled"}>Add to cart</Button>
            </div>
    );
};

export default Product;
