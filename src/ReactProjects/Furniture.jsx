import React, { useState } from "react";
import "./Furniture.css";
import chair12 from "../pix/chair12.avif"


const Furniture = ({ logo, Mcount }) => {



    return (
        <div>
            <img src={chair12} alt="back" style={{
                position: "absolute",
                bottom: "0",
                width: "100%",

            }} />
            <div className="container" style={{
                backgroundColor: "black",
                opacity: "0.6"

            }}>
                <div className="header">
                    <div>
                        <h2>
                            {logo}
                        </h2>
                    </div>
                    <div className="nav-container">
                        <div className="nav-links">
                            <a href="#">Home</a>
                        </div>
                        <div className="nav-links">
                            <a href="#">About us</a>
                        </div>
                        <div className="nav-links">
                            <a href="#">Services</a>
                        </div>
                        <div className="nav-links">
                            <a href="#">Blog</a>
                        </div>
                        <div className="nav-links">
                            <a href="#">Contact us</a>
                        </div>
                        <div>
                            <h3>
                                {Mcount}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h1>
                        Modern Furniture <br /> Design Studio
                    </h1>
                    <div>
                        <p>
                            Well-designed online furniture stores  build trust and
                        </p>
                        <p>
                            rage leads  to  action. Creating a great user experienc
                        </p>
                        <p>
                            your online (form and function).
                        </p>
                    </div>

                    <div id="Btns" >

                        <button type="button" id="btn-left">Show Now</button>
                        <button type="button">Explore</button>
                    </div>
                </div>

            </div >
        </div>
    )
}

Furniture.defaultProps = {
    logo: "prop",
    name: "prop"
}

export default Furniture;