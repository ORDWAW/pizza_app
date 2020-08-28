import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div style={{display: "flex"}}>
                <iframe width={"600px"}
                        title={"Where's Super Slice?"}
                        height={"450px"}
                        frameBorder={"0"}
                        style={{border: "1px solid black", margin: "50px"}}
                        src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDmT-DJAhVCpapSBPS68u4-kOdOprVAN4c&q=Fabryka+Norblina,Warsaw+PL"}
                        allowFullScreen/>
                <div className={"contact__container"}>
                    <img className={"app__contact__card"}
                         src={require("./img/final_contact_gif.gif")}
                         alt={"contact card"}/>
                </div>
            </div>
        </>
    );
};

export default Contact;
