import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../images/ServiceImg.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        
   </>
    )

}


export default Service;