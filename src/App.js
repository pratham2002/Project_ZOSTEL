import './App.css';
import BookYourStay from './components/BookYourStay';
import LiveItNow from './components/LiveItNow';
import SelectUnitGridImage from './components/SelectUnitGridImage';

function App() {
  return (
    <div className="App">
      <LiveItNow />
      <SelectUnitGridImage/>
      <BookYourStay />
    </div>
  );
}

export default App;
