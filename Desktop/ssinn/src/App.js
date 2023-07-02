import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Deluxe, Family, Ocean, Executive, Rooms } from "./pages/rooms";
import Home from "./pages/Home";
import Booking from "./pages/booking";
import Resto from "./pages/resto";
import Review from "./pages/review";
import Footer from "./components/Footer";







function App() {
return (
  <div className="App">
  <Router>
	<Sidebar />
  <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/rooms/Deluxe' element={<Deluxe/>} />
        <Route path='/rooms/Family' element={<Family/>} />
        <Route path='/rooms/Ocean' element={<Ocean/>} />
        <Route path='/rooms/Executive' element={<Executive/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/resto' element={<Resto/>} />
        <Route path='/review' element={<Review/>} />
      </Routes>


    </Router>

    <Footer/>
   
    </div>
);
}

export default App;
