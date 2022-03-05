import './App.css';
import BookYourStay from './components/BookYourStay';
import LiveItNow from './components/LiveItNow';
import Navbar from './components/Navbar/Navbar';
import SelectUnitGridImage from './components/SelectUnitGridImage';
import Sec1 from './components/Carousel1/Sec1'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LiveItNow />
      <Sec1 />
      <SelectUnitGridImage/>
      <BookYourStay />
    </div>
  );
}

export default App;
