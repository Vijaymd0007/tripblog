import "./style.css";
import Navbar from "./components/Navbar.js"
import Service from "./routes/Service";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App(){
    return(
        <div className = "App">
            
                <Routes>
                    <Route path="/" element={ <Home/>}/>
                    <Route path="/about" element={ <About/>}/>
                    <Route path="/service" element={ <Service/>}/>
                    <Route path="/contact" element={ <Contact/>}/>
                </Routes>
            
                
               
               
           
        </div>
    )
}