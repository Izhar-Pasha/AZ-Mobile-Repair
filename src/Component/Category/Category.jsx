import React from 'react';
import "./Category.scss";
import Mobile from "../../Assets/Mobile.jpeg";
import Laptop from "../../Assets/Laptop.jpeg";
import Watch from "../../Assets/Watch.jpeg";
import Headphones from "../../Assets/Headphones.png";
import Earpods from "../../Assets/Earpods.webp";
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <section className="category">
            <div className="header">
                <h1>CATEGORY</h1>
                <div className="underline"></div>
            </div>
            <div className="content" id='cat'>
                {/* CATEGORY 1 */}
                <Link to="/Mobile" style={{ textDecoration: 'none' }}>  <div className="cat">
                    <div className="img">
                        <img className='image' src={Mobile} alt="" />
                    </div>
                    <h1 className='title'>Mobile Repair</h1>
                </div></Link>

                {/* CATEGORY 2 */}
                <Link to="/Watch" style={{ textDecoration: 'none' }}> <div className="cat">
                    <div className="img">
                        <img className='image' src={Watch} alt="" />
                    </div>
                    <h1 className='title'>Smart Watch Repair</h1>
                </div></Link>


                {/* CATEGORY 3 */}
                <Link to="/Laptop" style={{ textDecoration: 'none' }}>  <div className="cat">
                    <div className="img">
                        <img className='image' src={Laptop} alt="" />
                    </div>
                    <h1 className='title'>Laptop Repair</h1>
                </div></Link>

                {/* CATEGORY 4 */}
                <Link to="/Headphones" style={{ textDecoration: 'none' }}>  <div className="cat">
                    <div className="img">
                        <img className='image' id='head' src={Headphones} alt="" />
                    </div>
                    <h1 className='title'>Headphones</h1>
                </div></Link>

                {/* CATEGORY 5 */}
                <Link to="/Earpods" style={{ textDecoration: 'none' }}>   <div className="cat">
                    <div className="img">
                        <img className='image' src={Earpods} alt="" />
                    </div>
                    <h1 className='title'>Earpods</h1>
                </div></Link>

            </div>
        </section>
    )
}

export default Category
