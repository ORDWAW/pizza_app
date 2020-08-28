import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div className={"gif__menu__container"}>
            <img className={"app__menu__gif"}
                 src={require("./img/menu_gif.gif")}
                 alt={"Menu gif"}/>
        </div>
    );
};

export default Menu;
