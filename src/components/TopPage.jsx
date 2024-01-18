import React from "react";
import { images } from "../assets/assets";

//this function will open up the location of the shop in a new window
function OpenShopLocation() {
    const ShopLocation = "https://www.google.com/maps?q=sasa+mall,+Nairobi,+Kenya"
    window.open(ShopLocation, "_blank")
}

function TopPage() {
    const phoneNumber = "0711938980"
    const whatsAppMessage = encodeURIComponent("Hello, do you do Instant deliveries?")
   
    return (
        <div>
            {/* display the loaction icon and content */}
            <div id="loaction" className="flex items-center justify-center ">
                <img src={images.locationIconToppage} alt="loaction Icon" onClick={OpenShopLocation} className="mr-2 h-5" />
                <span>
                    <span className="hidden md:inline">
                        Location: Sasa mall, Moi Avenue. 3rd floor, shop no C6
                    </span>
                    <span className="md:hidden">View location </span>
                </span>

                {/* display phone no and contact */}
                <a href={`tel:${"+254"+phoneNumber}`} className="flex items-center">
                    <img src={images.phoneIcon} alt="loaction Icon" className="ml-2 h-5" />
                    <span className="ml-2">
                        {phoneNumber} 
                    </span>
                </a>

                {/* display whatsApp */}
                <a href={`https://wa.me/${"+254"+phoneNumber}?text=${whatsAppMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img src={images.whatsAppIcon} alt="loaction Icon" className="ml-2 h-5" />
                    <span className="ml-2">
                        {phoneNumber} 
                    </span>
                </a>
            </div>

        </div>
    )
}

export default TopPage