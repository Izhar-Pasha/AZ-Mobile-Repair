import React from 'react'
import "./Services.scss";
import head1 from "../../Assets/headphone-1.webp";
import head2 from "../../Assets/headphone-2.webp";
import head3 from "../../Assets/headphone-3.webp";
import head4 from "../../Assets/headphone-4.webp";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const Headphones = () => {
    return (
        <section className="service headphone">
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
                        <img src={head1} alt="display" />
                    </div>
                    <h1><span>Boat Rockerz 558</span></h1>
                    <p>boAt Rockerz 558 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with latest Bluetooth v5. 0 for instant wireless connectivity. Its powerful 500mAh battery provides a playtime of up to 20 hours for an extended audio bliss.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={head2} alt="display" />
                    </div>
                    <h1><span>Boat Rockerz 518</span></h1>
                    <p>Rockerz 518 comes with a thumping playback time of upto 20 hours and a standby time of 250 hours. The softness of the ear pads and the adjustable band makes boAt Rockerz 518 pleasurable to wear.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={head3} alt="display" />
                    </div>
                    <h1><span>Rockerz 450 Superman DC Edition</span></h1>
                    <p>If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450.</p>
                </div>

                <div className="context">
                    <div className="image">
                        <img src={head4} alt="display" />
                    </div>
                    <h1><span>Boat Rockerz 425 </span></h1>
                    <p>Immerse in the vibe with Rockerz 425 & its powerful 40mm drivers. With 25H of playback, enjoy every track without a break. Gamers, we got you! Rockerz 425 comes with BEAST™ Mode — enable it with a dedicated button & make precise kills with low latency.</p>
                </div>
            </div>
        </section>
    )
}

export default Headphones
