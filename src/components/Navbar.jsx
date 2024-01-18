//This component will contain the navigation
import React, { useState } from "react";
import { images } from "../assets/assets";

function Navbar() {
    //state of the menu toogler
    const [isMenuOpen, setMenuOpen] = useState(false)

    //the toogler function that changes the boolean value to either true or false
    const tooggleMenu = () => {
        setMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }

    return (
        <nav className="bg-darkBrown text-white text-[15px] font-semibold font-['EB Garamond'] uppercase ">
            <div>
                
                {/* display the menu icon on small devices */}
                <div className=" flex w-3/4 mx-auto md:hidden cursor-pointer" onClick={tooggleMenu}>
                   {isMenuOpen? '✕' : '☰'}
                </div>

                {/* Display the nav on medium and large devices or when the menu is open */}
                <div className={` md:flex w-3/4 mx-auto ${isMenuOpen ? 'flex-col ' : 'hidden' }`}>
                    <h1 className="mr-5 cursor-pointer">HOME</h1>
                    <h1 className="mr-5 cursor-pointer">OUR PRODUCTS</h1>
                    <h1 className="mr-5 cursor-pointer">FAQ'S</h1>
                    <h1 className="mr-5 cursor-pointer">CONTACT US</h1>
                    <img src={images.shoppingCart} alt="shopping cart" className="cursor-pointer" />
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
