//This component should have the Mazaki logo and the spices image.

import React from "react";

import { images } from "../assets/assets";
import Navbar from "./Navbar";

function Header() {
    return (
        <div>
            <div className="bd-red-500 text-white"
            style={{
                background: "red",
                backgroundImage: `url(${images.HeaderBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
                {/* Navigation bar goes here */}
                <Navbar />

                <div
                    className="text-center"
                    style={{
                        paddingBottom: "150px",
                        paddingTop: "50px",
                    }}
                >
                    <span
                        style={{
                            color: "White",
                            fontSize: "100px",
                            fontWeight: "normal",
                            fontFamily: "Kaushan Script",
                            textTransform: "uppercase",
                        }}
                    >
                        m
                    </span>
                    <span
                        style={{
                            color: "white",
                            fontSize: "40px",
                            fontWeight: "semibold",
                            fontFamily: "EB Garamond",
                            textTransform: "uppercase",
                        }}
                    >
                        AZAKI
                    </span>

                    <div
                        style={{
                            color: "white",
                            fontSize: "40px",
                            fontWeight: "semibold",
                            fontFamily: "EB Garamond",
                            textTransform: "uppercase",
                        }}
                    >
                        HERBS AND SPICES
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
