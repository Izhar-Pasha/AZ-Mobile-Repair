import React from 'react'
import "./Services.scss";
import pods1 from "../../Assets/earbuds-1.webp";
import pods2 from "../../Assets/earbuds-2.webp";
import pods3 from "../../Assets/earbuds-3.webp";
import pods4 from "../../Assets/earbuds 4.webp";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const Earpods = () => {
    return (
        <section className="service pods">
            <div className="previous">
                <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}> <p id='pre'>
                    <span id='arrow'><HiOutlineArrowNarrowLeft /> </span>
                    <p>Back</p>
                </p></Link>
            </div>
            <div className="header">
                <h1>AVAILABLE PRODUCTS</h1>
                <div className="underline"></div>
            </div>
            <div className="content">

                <div className="context">
                    <div className="image">
                        <img src={pods1} alt="display" />
                    </div>
                    <h1><span>Airdopes 141 Pro</span></h1>
                    <p>Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={pods2} alt="display" />
                    </div>
                    <h1><span>BoAt Airdopes 441 Pro</span></h1>
                    <p className='pods' >Truly wireless experience. Unstoppable battery. Immersive Sound. Plug into the most seamless workouts with these true wireless earbuds designed for sweat, splash, and water resistance. The perfect Secure Fit for outdoors with advanced capacitive touch controls to power your non stop hustle. Hit the gym or play on the field, these earbuds remain intact. Experience 6mm drivers for immersive sound. These noise cancelling bluetooth earbuds come with the latest V5.0 technology for instant connectivity. Insta Wake N’ Pair Technology powers on their connection mode as soon as they’re out of the earbuds case.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={pods3} alt="display" />
                    </div>
                    <h1><span>BoAt Airdopes 402</span></h1>
                    <p className='pods'>Ride through the highest waves of Nirvana on your boAt Airdopes 402 wireless earbuds. Drown in your favourite rhythm with its immersive 10mm drivers and boAt Signature Sound. Its IWP™️ technology and Bluetooth v5.2 offers a seamless and truly wireless listening experience. Let nothing come in between you and your music with its massive 30HRS of playback. Even if you manage to exhaust your battery, ASAP charge empowers you with another 60 minutes of playback within 5 minutes of charge. Let your thoughts echo clear and loud with ENx™️ technology that ensures crystal clear voice delivery. Navigating through your music and calls is a breeze with its Easy Touch Controls. Do it all and more with Airdopes 402</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={pods4} alt="display" />
                    </div>
                    <h1><span>Airdopes 161 Pro</span></h1>
                    <p>Dual Mics with ENx™ Technology: Airdopes 161 Pro-buds, featuring Dual Mics with ENx™ Technology, guarantee enhanced voice clarity by effectively cancelling background noise. Communicate crisply and clearly during calls, even in noisy environments, ensuring your message gets across without any hindrances.</p>
                </div>
            </div>
        </section>
    )
}

export default Earpods
