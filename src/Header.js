import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

const Header = () => {
    return (
        <nav className={"header"}>
            <Link to={"/"}>
                <img className={"header__logo"}
                     src={require("./img/just_text_logo.png")}
                     alt={"header logo"}/>
            </Link>
            <div className={"header__spacer"}/>
            <div className={"header__nav"}>
                <Link className={"header__link"}
                      to="/menu">
                    <div className={"header__option"}>
                        <span>MENU</span>
                    </div>
                </Link>
                <Link className={"header__link"}
                      to="/order">
                    <div className={"header__option"}>
                        <span>ORDER</span>
                    </div>
                </Link>
                <Link className={"header__link"}
                      to="/contact">
                    <div className={"header__option"}>
                        <span>CONTACT</span>
                    </div>
                </Link>
                <Link className={"header__link"}
                      to="/cart">
                    <div className={"header__optionBasket header__option header__basketBox"}>
                        <ShoppingBasketIcon/>
                        <span className={"header__option header__basketCount"}>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
