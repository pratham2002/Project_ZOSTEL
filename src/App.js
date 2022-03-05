import { Routes, Route } from "react-router-dom";
import HotelBookingPage from "./components/HotelBookingPage";
import HomePage from "./components/HomePage.jsx";
import ConfirmYourBooking from "./components/ConfirmYourBooking.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bookRoom" element={<HotelBookingPage />} />
        <Route path="confirnyourbooking" element={<ConfirmYourBooking />} />
      </Routes>
    </div>
  );
}

export default App;
