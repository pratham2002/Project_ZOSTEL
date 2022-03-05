import './App.css';
import BookYourStay from './components/BookYourStay';
import LiveItNow from './components/LiveItNow';
import LongStay from './components/LongStay';
import Navbar from './components/Navbar/Navbar';
import SelectUnitGridImage from './components/SelectUnitGridImage';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
       <LiveItNow />
      <SelectUnitGridImage/>
      <BookYourStay /> */}
      <LongStay/>
    </div>
  );
}

export default App;
