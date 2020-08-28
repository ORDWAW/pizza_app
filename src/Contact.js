import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <>
            {/*<div className={"contact__container"}>*/}
            {/*    <img className={"app__contact__card"}*/}
            {/*         src={require("./img/contact_1.png")}*/}
            {/*         alt={"contact card"}/>*/}
            {/*</div>*/}
            <div className={"contact__container"}>
                <img className={"app__contact__card"}
                     src={require("./img/final_contact_gif.gif")}
                     alt={"contact card"}/>
            </div>
        </>
    );
};

export default Contact;
