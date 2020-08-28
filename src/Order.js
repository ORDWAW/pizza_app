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
                    title={'"Classic" Margarita'}
                    kind={"SLICE"}
                    price={10}
                    image={require("./img/pizza_img/margarita.jpg")}/>
                <Product
                    id={2}
                    title={'"Classic" Margarita'}
                    kind={"FULL PIE (60CM)"}
                    price={40}
                    image={require("./img/pizza_img/margarita.jpg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={3}
                    title={'"Classic" Pepperoni'}
                    kind={"SLICE"}
                    price={12}
                    image={require("./img/pizza_img/pepperoni.jpeg")}/>
                <Product
                    id={4}
                    title={'"Classic" Pepperoni'}
                    kind={"FULL PIE (60CM)"}
                    price={44}
                    image={require("./img/pizza_img/pepperoni.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Chicago Style'}
                    kind={"SLICE"}
                    price={14}
                    image={require("./img/pizza_img/chicago_style.jpeg")}/>
                <Product
                    id={2}
                    title={'Chicago Style'}
                    kind={"FULL PIE (60CM)"}
                    price={48}
                    image={require("./img/pizza_img/chicago_style.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Vegan'}
                    kind={"SLICE"}
                    price={16}
                    image={require("./img/pizza_img/vegan.jpeg")}/>
                <Product
                    id={2}
                    title={'Vegan'}
                    kind={"FULL PIE (60CM)"}
                    price={52}
                    image={require("./img/pizza_img/vegan.jpeg")}/>
            </div>
            <div className="product__row">
                <Product
                    id={1}
                    title={'Seasonal'}
                    kind={"SLICE"}
                    price={16}
                    image={require("./img/pizza_img/seasonal.jpeg")}/>
                <Product
                    id={2}
                    title={'Seasonal'}
                    kind={"FULL PIE (60CM)"}
                    price={52}
                    image={require("./img/pizza_img/seasonal.jpeg")}/>
            </div>
            <h4 className={"order__footer"}>MINIMUM ORDER: 25 PLN</h4>
        </div>
    );
};

export default Order;
