import React from 'react';
import "./Order.css";
import Product from "./Product";

const Order = () => {
    return (
        <div>
            <h1 className={"order__title"}>ORDER FOR FREE DELIVERY</h1>
            {/* Product ID, title, price, rating, image */}
            {/*  Product */}
            <div className="product__row">
                <Product
                    id={1}
                    title={'"Classic" Margarita SLICE'}
                    price={10}
                    image={require("./img/pizza_img/margarita.jpg")}/>
                <Product
                    id={2}
                    title={'"Classic" Margarita FULL PIE'}
                    price={40}
                    image={require("./img/pizza_img/margarita.jpg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={3}
                    title={'"Classic" Pepperoni SLICE'}
                    price={12}
                    image={require("./img/pizza_img/pepperoni.jpeg")}/>
                <Product
                    id={4}
                    title={'"Classic" Pepperoni FULL PIE'}
                    price={44}
                    image={require("./img/pizza_img/pepperoni.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Chicago Style SLICE'}
                    price={14}
                    image={require("./img/pizza_img/chicago_style.jpeg")}/>
                <Product
                    id={2}
                    title={'Chicago Style FULL PIE'}
                    price={48}
                    image={require("./img/pizza_img/chicago_style.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Vegan SLICE'}
                    price={16}
                    image={require("./img/pizza_img/vegan.jpeg")}/>
                <Product
                    id={2}
                    title={'Vegan FULL PIE'}
                    price={52}
                    image={require("./img/pizza_img/vegan.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Seasonal SLICE'}
                    price={16}
                    image={require("./img/pizza_img/seasonal.jpeg")}/>
                <Product
                    id={2}
                    title={'Seasonal FULL PIE'}
                    price={52}
                    image={require("./img/pizza_img/seasonal.jpeg")}/>
            </div>
        </div>
    );
};

export default Order;
