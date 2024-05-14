import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../Assets/payments.png";
import "./Footer.scss";
import { FcLike } from "react-icons/fc";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad sed in suscipit quam officia deserunt quod itaque. Iusto temporibus quae quasi quo culpa quisquam et quam.</div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">1,Lakkasandra, Lakkasandra Extension, Wilson Garden, Bengaluru, K'taka- 560030</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +917892660255</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@rahzi.com</div>
                    </div>
                </div>


                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>


                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                   &copy; All RIGHTS RESERVED 2024 || MADE BY IZHAR PASHA WITH  <FcLike />               
                    </div>
                        <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;