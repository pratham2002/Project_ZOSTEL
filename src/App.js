import './App.css';
import LiveItNow from './components/LiveItNow';
import {Routes,Route} from "react-router-dom"
import HotelBookingPage from './components/HotelBookingPage';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<LiveItNow />} />
            <Route path='bookRoom' element={<HotelBookingPage />} />
        </Routes>
    </div>
  );
}

export default App;
