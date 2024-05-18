import React from 'react'
import "./Services.scss";
import WatchDisplay from "../../Assets/Watch Display.jpeg";
import Button from "../../Assets/Watch Button.jpeg";
import Battery from "../../Assets/Watch Battery.jpeg";
import Water from "../../Assets/Water Damage.jpeg";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const SmartWatch = () => {
    return (
        <section className="service watch">
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
                        <img src={WatchDisplay} alt="display" />
                    </div>
                    <h1>Display Repair</h1>
                    <p><span>Cracked or unresponsive screen?</span>  Our experts will restore your smartwatch display quickly and affordably, ensuring it looks and functions like new.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={Button} alt="display" />
                    </div>
                    <h1>Smart Buttons</h1>
                    <p><span>Stuck or unresponsive buttons?</span>  Our skilled technicians will fix or replace your smartwatch buttons swiftly, ensuring seamless functionality.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={Battery} alt="display" />
                    </div>
                    <h1>Battery Replacemnet</h1>
                    <p><span>Battery not lasting?</span> Get your smartwatch battery replaced quickly and affordably by our experts for long-lasting performance.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={Water} alt="display" />
                    </div>
                    <h1>Water Damage</h1>
                    <p><span>Accidentally submerged?</span> Our experts quickly repair water damage, restoring your smartwatch to perfect working condition.</p>
                </div>

            </div>
        </section>
    )
}

export default SmartWatch
