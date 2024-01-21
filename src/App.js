import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Booking from "./Components/Booking";
import Vehicles from "./Components/Vehicles";
import Packages from "./Components/Packages";
import ContactUs from "./Components/ContactUs";
import CarState from "./context/cars/Carpk"
import { app, auth } from "./firebase";
import Otp from "./Components/Otp";
import Selectpackage from "./Components/Selectpackage";
import Signinform from "./Components/Signinform";


function App() {
  return (
    <>
    
      <Router>
      <CarState>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Booking />} />
          <Route exact path="/vehicles" element={<Vehicles />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Signinform /> } />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/selectpackage" element={<Selectpackage />} />
        </Routes>
      </CarState>        
      </Router>
    
    
    
      
    </>
  );
}

export default App;
