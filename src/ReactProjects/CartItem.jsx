import React, { useState } from "react";

const CatSec = ({ explore, handleplus }) => {


    return (
        <div className="cartsec-container">
            <div className="flex-item left" >
                <h3>
                    Crafted with excellent materials
                </h3>
                <p>
                    attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value
                </p>
                <div className="">
                    <button>{explore}</button>
                </div>
            </div>
            <div className=".flex-item right">
                <div className="flex-item x">
                    <div id="chair" style={{ backgroundImage: "url('./chair7.jpg')" }}>

                    </div>
                    <div id="p">
                        <p>
                            Cesca chair  $800 <br /> <button onClick={handleplus} id="plus">+</button>
                        </p>
                    </div>
                </div>
                <div className="flex-item x" >
                    <div id="chair" style={{ backgroundImage: "url('./bed1.avif')" }}>

                    </div>
                    <div id="p">
                        <p>
                            Marcel Buer $2000 <br /> <button onClick={handleplus} id="plus">+</button>
                        </p>
                    </div>
                </div>
                <div className="flex-item bed1 x">
                    <div id="chair" style={{ backgroundImage: "url('./chair8.avif')" }}>

                    </div>
                    <div id="p">
                        <p>
                            Nordic chair $500 <br /> <button onClick={handleplus} id="plus">+</button>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default CatSec; 