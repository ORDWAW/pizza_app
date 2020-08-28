import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <>
            <div className={"gif__container"}>
                <img className={"app__landing__gif"}
                     src={require("./img/real_final_gif.gif")}
                     alt={"Logo gif"}/>
            </div>
        </>
    );
};

export default LandingPage;
