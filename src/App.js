import './App.css';
import Home from "./Component/Home/Home.jsx";
import Footer from './Component/Footer/Footer.jsx';
import Mobile from './Component/Services/Mobile.jsx';
import Laptop from './Component/Services/Laptop.jsx';
import SmartWatch from './Component/Services/SmartWatch.jsx';
import Headphones from './Component/Services/Headphones.jsx';
import Earpods from './Component/Services/Earpods.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Mobile' element={<Mobile />} />
          <Route path='/Watch' element={<SmartWatch />} />
          <Route path='/Laptop' element={<Laptop />} />
          <Route path='/Headphones' element={<Headphones />} />
          <Route path='/Earpods' element={<Earpods />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
