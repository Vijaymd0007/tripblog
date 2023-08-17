import TripData from "./TripData"
import "./TripStyles.css"
import image1 from "../images/card1.jpg"
import image2 from "../images/card2.jpg"
import image3 from "../images/card3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
           
           <div className="tripcard">
                <TripData 
                    image={image1}
                    heading="Trip in Goa"
                    text="Goa is a coastal paradise in India known for its pristine beaches, vibrant nightlife, and Portuguese heritage. With a perfect blend of sun, sand, and sea, it offers a unique and unforgettable experience for travelers seeking relaxation and adventure. Explore its lively markets, indulge in water sports, and immerse yourself in the rich cultural heritage of this tropical destination
                    ."
                 />
                <TripData 
                    image={image2}
                    heading="Trip in Manali"
                    text="Manali is a breathtaking hill station nestled in the Indian state of Himachal Pradesh. Surrounded by snow-capped mountains and lush green valleys, it offers a picturesque escape for nature lovers and adventure enthusiasts. Explore the serene beauty of Rohtang Pass, indulge in thrilling activities like paragliding and river rafting, and experience the warm hospitality of this popular tourist 
                    destination."
                 />
                <TripData 
                    image={image3}
                    heading="Trip in Rajasthan"
                    text="Rajasthan, the Land of Kings, is a vibrant state in India known for its rich history, magnificent forts, and colorful culture. Explore the opulent palaces of Jaipur, witness the desert beauty of Jaisalmer, and immerse yourself in the bustling markets of Udaipur. With its royal heritage and traditional charm, Rajasthan offers a captivating experience for travelers seeking a taste of 
                    royalty."
                 />
           </div>
            

        </div>
       
    )
}

export default Trip
