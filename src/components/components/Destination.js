import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import DestinationData from "./DestinationData"
import image3 from "../images/3.png"
import image4 from "../images/4.avif"

import "./DestinationStyles.css"

const Destination = ()=>{
    return(
        
            <div className="destination">
                <h1>Popular Destination</h1>
                <p>Tourd give you opportunity to see a lot, within a time frame.</p>
                
                <DestinationData
                cName="first-des"
                heading="Alleppey (Alappuzha)"
                text="There is the whole of Kerala in one side, and then there is this
                heavenly tourist destination called Alappuzha or Alleppey! 
                Esteemed as the ‘Backwater Capital of India’ or the 
                ‘Venice of the East’, Alleppey is known for its silent backwaters
                and bountiful beauty!
                Seated on the banks of the azure Vembanad
                Lake, it is in fact one of the most popular backwater destinations
                in Kerala and one of the highest sought-aftertourist places in Kerala. 
                Visit this paradise; enjoy houseboat cruise and stay, village walks, 
                Ayurvedic therapies and lot more!"

                img1={image1}
                img2={image2}
                />
                
                <DestinationData
                cName="sec-des"
                heading="Munnar"
                text="Yet another gorgeous hill station in the lap of the fascinating Western Ghats, Munnar needs no introduction. Rising 1,600m above the sea level, a vacation in the beguiling locales of this hilly retreat is all about the lofty clouds, picturesque mountains, rolling hills, and a soothing ambience.

                Canopied mostly by never-ending tea plantations and lush forests, you simply cannot miss out Munnar while searching for the best tourist destination in Kerala. Be it during the summer or the winter, monsoon or the spring, Munnar will always make you crave for more!"

                img1={image3}
                img2={image4}
                />
               
            </div>
       
       
    )
}

export default Destination