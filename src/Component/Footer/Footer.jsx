import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../Assets/payments.png";
import "./Footer.scss";
import { FcLike } from "react-icons/fc";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col" id="about">
                    <div className="title">About</div>
                    <div className="txt">Welcome to AZ Quick Mobile Services, where your smartphone issues are resolved swiftly and expertly. I'm highly trained professional technician specialize in fixing cracked screens, resolving MotherBoard issues, water damage, battery problems, and more for all major brands. I pride ourselves on fast turnaround times, affordable prices, and exceptional customer service. Trust us to restore your device to perfect working condition quickly and efficiently!</div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                       <a href="https://www.google.com/maps/place/AZ+QUICK+MOBILE+SERVICE/@12.943087,77.5953989,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150009251ba7:0x10c61e6b9a3b2a9!8m2!3d12.9430818!4d77.5979738!16s%2Fg%2F11y45zqqz0?entry=ttu"><div className="contact">1,Lakkasandra, Lakkasandra Extension, Wilson Garden, Bengaluru, K'taka- 560030</div></a>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="contact">Phone: +917892660255</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="contact"><a href="mailto:barkathali1996@gmail.com">Email: barkathali1996@gmail.com</a></div>
                    </div>
                </div>


                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Mobile Repair</span>
                    <span className="text">Smart Watches Repair</span>
                    <span className="text">Laptop Repair</span>
                    <span className="text">Headphones</span>
                    <span className="text">Earpods</span>
                </div>


                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Category</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="designer">
                <a href="https://izhar-pasha.github.io/PortFolio/">Designed & Develop By: <span>Izhar Pasha</span></a>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                   &copy; All RIGHTS RESERVED 2024 ||  AZ QUICK MOBILE SERVICES WITH <FcLike />               
                    </div>
                        <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
