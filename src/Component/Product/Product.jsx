import React from 'react'
import "./Product.scss";
import Marquee from 'react-fast-marquee';
import apple from "../../Assets/apple (1).png";
import oneplus from "../../Assets/one-plus.png";
import samsung from "../../Assets/samsung.png";
import vivo from "../../Assets/vivo.png";
import mi from "../../Assets/xiaomi.png";
import motorola from "../../Assets/motorola.png";
import nokia from "../../Assets/nokia.png";
import asus from "../../Assets/asus.png";
import honor from "../../Assets/Honor.png";



const Product = () => {
  return (
    <section className="product">
      <div className="header">
        <h1>Premium Refurbished Phones - Quality You Can Trust</h1>
        <p>We Do Buy & Sell! All Brands Of Mobiles!</p>
      </div>
      <Marquee speed={50} gradient={false} className="content">
        <div >
          <img src={apple} alt="apple" />
        </div>
        <div >
          <img src={oneplus} alt="apple" />
        </div>
        <div>
          <img src={samsung} alt="apple" />
        </div>
        <div >
          <img src={vivo} alt="apple" />
        </div>
        <div >
          <img src={mi} alt="apple" />
        </div>
        <div >
          <img src={motorola} alt="apple" />
        </div>
        <div >
          <img src={nokia} alt="apple" />
        </div>
        <div >
          <img src={asus} alt="apple" />
        </div>
        <div>
          <img src={honor} alt="apple" />
        </div>
      </Marquee>
    </section>
  )
}

export default Product
