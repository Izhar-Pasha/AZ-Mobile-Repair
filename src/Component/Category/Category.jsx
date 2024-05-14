import React from 'react';
import "./Category.scss";
import Mobile from "../../Assets/Mobile.jpeg";
import Laptop from "../../Assets/Laptop.jpeg";
import Watch from "../../Assets/Watch.jpeg";
import Headphones from "../../Assets/Headphones.png";
import Earpods from "../../Assets/Earpods.webp";


const Category = () => {
    return (
        <section className="category">
            <div className="header">
                <h1>CATEGORY</h1>
                <div className="underline"></div>
            </div>
            <div className="content">
                {/* CATEGORY 1 */}
                <div className="cat">
                    <div className="img">
                        <img className='image' src={Mobile} alt="" />
                    </div>
                    <h1 className='title'>Mobile Repair</h1>
                </div>

                {/* CATEGORY 2 */}
                <div className="cat">
                    <div className="img">
                        <img className='image'  src={Laptop} alt="" />
                    </div>
                    <h1 className='title'>Laptop Repair</h1>
                </div>

                {/* CATEGORY 3 */}
                <div className="cat">
                    <div className="img">
                        <img className='image' src={Watch} alt="" />
                    </div>
                    <h1 className='title'>Smart Watch Repair</h1>
                </div>

                {/* CATEGORY 4 */}
                <div className="cat">
                    <div className="img">
                        <img className='image' id='head' src={Headphones} alt="" />
                    </div>
                    <h1 className='title'>Headphones</h1>
                </div>

                {/* CATEGORY 5 */}
                <div className="cat">
                    <div className="img">
                        <img className='image' src={Earpods} alt="" />
                    </div>
                    <h1 className='title'>Earpods</h1>
                </div>

            </div>
        </section>
    )
}

export default Category
