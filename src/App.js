import Navbar from './components/navbar';
import Home from './components/home';
import TypesOfRoot from './components/typesOfRoot';
import RealTimeSamples from './components/realTimeimages';
import WhyToChoose from './components/whyToChoose';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <TypesOfRoot/>
      <RealTimeSamples/>
      <WhyToChoose/>
    </div>
  );
}

export default App;
