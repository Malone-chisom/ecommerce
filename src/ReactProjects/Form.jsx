import React, { useState } from "react";

const FurnitureForm = ({ firstName, lastName, gmail, setFirstName, setLastName, setGmail, newsGmail, setNewsGmail }) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        let payLoad = {
            userLName: firstName,
            userFName: lastName,
            userGmail: gmail,
            newLettergm: gmail
        };
        console.log('payLoad', payLoad)
    }


    return (
        <div className="overall-form">
            <div className="foot-left"  >
                <div>
                    <h1>
                        LEAVE A REPLY
                    </h1>
                    <p>
                        <i>
                            Your email address will not be published. Requird fields are marked
                        </i>
                    </p>
                </div>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <input type="text"
                                name="Fname"
                                value={firstName}
                                placeholder="First Name"
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="Lname"
                                value={lastName}
                                placeholder="Last Name"
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="gmail"
                                name="gmail"
                                value={gmail}
                                placeholder="Enter your Gmail"
                                onChange={(e) => setGmail(e.target.value)} />

                        </div>
                        {/* <div>
                            <select name="" id="">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div> */}
                        <div >
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="foot-right" style={{ border: "1px solid black", display: "block" }} >
                <div style={{ display: "flex" }}>
                    <div>
                        <h3>
                            RESOURCES
                        </h3>
                        <ul>
                            <li>Application</li>
                            <li>Ducumentation</li>
                            <li>Systems</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            PRICING
                        </h3>
                        <ul>
                            <li>Overview</li>
                            <li>Premium Plans</li>
                            <li>Affilate Program</li>
                            <li>Promotion</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            SOCIAL
                        </h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <div style={{ border: "1px solid black" }}>
                    <h4>get the latest furniture news</h4>
                    <div>
                        <input style={{ outline: "none" }}
                            type="gmail"
                            name="gmail"
                            value={newsGmail}
                            placeholder="Your Gmail"
                            id=""
                            onChange={(event) => setNewsGmail(event.target.value)}
                        />

                        <input type="submit" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default FurnitureForm;