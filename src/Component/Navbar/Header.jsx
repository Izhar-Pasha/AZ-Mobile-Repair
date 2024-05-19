import { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const scrollToHeroSection = () => {
        document.querySelector('#home').scrollIntoView({ behavior: "smooth" });
    };    
    const scrollToCategory = () => {
        document.querySelector('#cat').scrollIntoView({ behavior: "smooth" });
    };   
     const scrollToAbout = () => {
        document.querySelector('#about').scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={scrollToHeroSection}>Home</li>
                        <li onClick={scrollToCategory}>Categories</li>
                        <li onClick={scrollToAbout}>About</li>
                    </ul>
                    <div className="right">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
