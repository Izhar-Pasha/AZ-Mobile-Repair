import logo from './logo.svg';
import './App.css';
import HeroSection from './Component/Herosection/HeroSection.jsx';
import Navbar from './Component/Navbar/Header.jsx';
import Category from './Component/Category/Category.jsx';
import Footer from './Component/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
