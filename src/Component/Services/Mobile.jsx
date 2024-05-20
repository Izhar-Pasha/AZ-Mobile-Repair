import React from 'react'
import "./Services.scss";
import Display from "../../Assets/Display.jpeg";
import MotherBoard from "../../Assets/MotherBoard.jpeg";
import Glass from "../../Assets/Display Glass.jpeg";
import Water_Damage from "../../Assets/Water Damage.jpeg";
import Battery from "../../Assets/Battery.jpeg";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Mobile = () => {
  return (
    <section className="service">
      <div className="previous">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}> <p id='pre'>
          <span id='arrow'><HiOutlineArrowNarrowLeft /> </span>
          <p>Back</p>
        </p></Link>
      </div>
      <div className="header">
        <h1>AVAILABLE SERVICES</h1>
        <div className="underline"></div>
      </div>
      <div className="content">


      <div className="context">
          <div className="image">
            <img src={MotherBoard} alt="display" />
          </div>
          <h1>Mother Board Repair</h1>
          <p><span>Device acting up?</span> We've got you covered. Get your motherboard fixed quickly and affordably with our best price range guarantee.</p>
        </div>

        <div className="context">
          <div className="image">
            <img src={Display} alt="display" />
          </div>
          <h1>Display Repair</h1>
          <p><span>Cracked screen?</span> No problem. Our expert technicians will swiftly fix your smartphone's display, ensuring crystal-clear visuals at the best price. Fast, reliable, and hassle-free.</p>
        </div>


        <div className="context">
          <div className="image">
            <img src={Glass} alt="display" />
          </div>
          <h1>Display Glass</h1>
          <p><span>Cracked or scratched screen?</span> Our expert technicians will replace your device's glass quickly and affordably, ensuring a flawless display.</p>
        </div>

        <div className="context">
          <div className="image">
            <img src={Water_Damage} alt="display" />
          </div>
          <h1>Water Damage</h1>
          <p><span>Dropped your device in water?</span> Don't panic. Our technicians specialize in repairing water-damaged devices swiftly and effectively. Trust us to revive your device and get it back to peak performance.</p>
        </div>

        <div className="context">
          <div className="image">
            <img src={Battery} alt="display" />
          </div>
          <h1>Battery Replacement</h1>
          <p><span>Low on power?</span> We'll replace your battery quickly and affordably, so you can keep going without interruption.</p>
        </div>
      </div>
    </section>
  )
}

export default Mobile
