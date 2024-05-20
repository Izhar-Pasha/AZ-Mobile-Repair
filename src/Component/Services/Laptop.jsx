// import React from 'react'
// import "./Services.scss";
// import Laptop_Display from "../../Assets/Laptop DIsplay.webp";
// import Hardware from "../../Assets/Laptop Hardware.webp";
// import Body from "../../Assets/Laptop Body.jpg";
// import Ram from "../../Assets/Laptop Ram.jpg";
// import Battery from "../../Assets/Laptop Battery.jpg";
// import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
// import { Link } from 'react-router-dom';



// const Laptop = () => {
//     return (
//         <section className="service laptop">
//             <div className="previous">
//                 <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}> <p id='pre'>
//                     <span id='arrow'><HiOutlineArrowNarrowLeft /> </span>
//                     <p>Back</p>
//                 </p></Link>
//             </div>
//             <div className="header">
//                 <h1>AVAILABLE SERVICES</h1>
//                 <div className="underline"></div>
//             </div>
//             <div className="content">

//                 <div className="context">
//                     <div className="image">
//                         <img src={Laptop_Display} alt="display" />
//                     </div>
//                     <h1>Laptop Display</h1>
//                     <p><span>Broken or flickering screen?</span>  Our technicians will fix your laptop's display swiftly and affordably, ensuring crisp visuals for your work or entertainment needs.</p>
//                 </div>

//                 <div className="context">
//                     <div className="image">
//                         <img src={Hardware} alt="display" />
//                     </div>
//                     <h1>Hardware Repair</h1>
//                     <p><span>Experiencing hardware issues with your laptop? </span>Our skilled technicians offer fast and reliable hardware repairs to get your device back up and running smoothly.</p>
//                 </div>

//                 <div className="context">
//                     <div className="image">
//                         <img src={Ram} alt="display" />
//                     </div>
//                     <h1>Increase Ram</h1>
//                     <p><span> Boost your laptop's performance</span> with a RAM upgrade. Our technicians will swiftly and seamlessly increase your device's RAM, ensuring smoother multitasking and faster operation.</p>
//                 </div>

//                 <div className="context">
//                     <div className="image">
//                         <img src={Body} alt="display" />
//                     </div>
//                     <h1>Physical Damage</h1>
//                     <p><span>Got dents or scratches on your laptop?</span>  Our expert technicians will restore its appearance with precision and care. Say goodbye to unsightly damage and hello to a pristine device.</p>
//                 </div>

//                 <div className="context">
//                     <div className="image">
//                         <img src={Battery} alt="display" />
//                     </div>
//                     <h1>Battery Replacement</h1>
//                     <p>Get a new laptop<span>battery swiftly and affordably</span>  . Stay powered up and productive with our quick replacement service.</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Laptop
