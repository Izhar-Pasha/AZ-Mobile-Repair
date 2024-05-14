import { useEffect, useState, useContext } from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo.png";

const Header = () => {

    const [scrolled, setscrolled] = useState(false);

    const handlescroll = () => {
        const offset = window.scrollY;
        if( offset >200){
            setscrolled(true);
        }
        else{
            setscrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handlescroll);
    }, []);

    return (
        <>     
           <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="right">
                    <img className="logo" src={Logo} alt="" />
                </div>
            </div>
        </header>
        </>

    );
};

export default Header;
