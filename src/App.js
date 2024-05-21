import './App.css';
import Home from "./Component/Home/Home.jsx";
import Footer from './Component/Footer/Footer.jsx';
import Mobile from './Component/Services/Mobile.jsx';
import SmartWatch from './Component/Services/SmartWatch.jsx';
import Headphones from './Component/Services/Headphones.jsx';
import Earpods from './Component/Services/Earpods.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Mobile' element={<Mobile />} />
          <Route path='/Watch' element={<SmartWatch />} />
          <Route path='/Headphones' element={<Headphones />} />
          <Route path='/Earpods' element={<Earpods />} />
        </Routes>
        <Footer />
      </Router>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
