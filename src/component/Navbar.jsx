import React, { useEffect, useState } from 'react'
import logo from '../assets/Images/nixvpnLogo3.png'
// import { BiSearch } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import nixvpn2 from '../assets/Images/nixvpnLogo.png'

import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

import 'typeface-roboto';

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showHowItWorksOptions, setShowHowItWorksOptions] = useState(false);

    const [navbarBackground, setNavbarBackground] = useState('rgb(89, 85, 239)');
    const [textColor, setTextColor] = useState('white');
    const [imageSrc, setImageSrc] = useState(nixvpn2);
    const [hamburgerBtnColor, setHamburgerBtnColor] = useState('white');
    const [navbarBoxShadow, setNavbarBoxShadow] = useState('none');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    const toggleHowItWorksOptions = () => {
        setShowHowItWorksOptions(!showHowItWorksOptions);
    };

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const closeSearch = () => {
        setIsSearchVisible(false);
    };

    const changeBackgroundAndTextOnScroll = () => {
        if (window.scrollY > 0) {
            setNavbarBackground('rgb(255,255,255)');
            setTextColor('black');
            setImageSrc(logo);
            setHamburgerBtnColor('black');

            setNavbarBoxShadow('0 3px 16px rgba(0, 0, 0, 0.1)');
        } else {
            setNavbarBackground('rgba(0, 0, 0, 0)');
            setTextColor('white');
            setImageSrc(nixvpn2);
            setHamburgerBtnColor('white');

            setNavbarBoxShadow('none')
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundAndTextOnScroll);

        // Initial call to set the text color based on the initial window size
        changeBackgroundAndTextOnScroll();
        return () => {
            window.removeEventListener('scroll', changeBackgroundAndTextOnScroll);
        };
    }, []);

    return (
        <div className="new-navbar" style={{ backgroundColor: navbarBackground, boxShadow: navbarBoxShadow }}>
            <Link to={'/'}>
                <div className="navbar-logo">
                    <img src={imageSrc} alt="Logo" />
                </div>
            </Link>

            <div className='search-menu'>
                <div className='navbar-option-search'>
                    <div className='search-icon' style={{ color: textColor }} onClick={toggleSearch}>
                        <BsSearch />
                    </div>

                    <div className={`search-box ${isSearchVisible ? 'visible' : ''}`}>
                        <div className='search-container'>
                            <input type="text" placeholder="Search..." />
                            <button className="search-close-button" onClick={closeSearch}>
                                <AiOutlineCloseCircle />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`menu-icon ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
                    <div className="bar" style={{ backgroundColor: hamburgerBtnColor }}></div>
                    <div className="bar" style={{ backgroundColor: hamburgerBtnColor }}></div>
                    <div className="bar" style={{ backgroundColor: hamburgerBtnColor }}></div>
                </div>
            </div>
            <ul className='navbar-options'>
                <Link to={'/'} onClick={()=>window.location.href('/')}>
                    <div style={{ color: textColor }}>Home</div>
                </Link>
                <Link to={'/about-us/'} onClick={()=>window.location.href('/about-us/')}>
                    <div style={{ color: textColor }}>About Us</div>
                </Link>
                <li className="works-dropdown" style={{ color: textColor }}>
                    How it works &nbsp; <span><FiChevronDown /></span>
                    <ul className="works-dropdown-content">
                        <Link to={'/linux-client-configuration/'} onClick={()=>window.location.href('/linux-client-configuration/')}><li>Linux Client Configuration</li></Link>
                        <Link to={'/macos-client-configurations/'} onClick={()=>window.location.href('/macos-client-configurations/')}><li>MacOS Client Configuration</li></Link>
                        <Link to={'/windows-client-setup-configuration/'} onClick={()=>window.location.href('/windows-client-setup-configuration/')}><li>Windows Client Configuration</li></Link>
                    </ul>
                </li>
                <Link to={'/contact-us/'} onClick={()=>window.location.href('/contact-us/')}>
                    <div style={{ color: textColor }}>Contact Us</div>
                </Link>
                <div className='navbar-search-icon' style={{ color: textColor }} onClick={toggleSearch}>
                    <BsSearch />
                </div>

                <div className={`search-box ${isSearchVisible ? 'visible' : ''}`}>
                    <div className='search-container'>
                        <input type="text" placeholder="Search..." />
                        <button className="search-close-button" onClick={closeSearch}>
                            <AiOutlineCloseCircle />
                        </button>
                    </div>
                </div>
            </ul>

            <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                <div className="close-section">
                    <div className='close-btn'>
                        <button onClick={closeSidebar}><AiOutlineCloseCircle /></button>
                    </div>
                </div>

                <div className="options-section">
                    <Link to={'/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/');}}>
                        <div className='sidebar-option-home'>
                            <div>Home</div>
                            <span><BiSolidDownArrow /></span>
                        </div>
                    </Link>
                    <Link to={'/about-us/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/about-us/');}}>
                        <div className='sidebar-option-about'>
                            <div>About Us</div>
                            <span><BiSolidDownArrow /></span>
                        </div>
                    </Link>
                    <div className={`works-accordion ${showHowItWorksOptions ? 'active' : ''}`} >
                        <div onClick={toggleHowItWorksOptions} className='sidebar-option-works'>
                            <div>How it Works</div>
                            <span><BiSolidDownArrow /></span>
                        </div>
                        <div className="sub-options">
                            <div className='sub-options-container'>
                                <Link to={'/linux-client-configuration/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/linux-client-configuration/');}}>Linux Client Configuration</Link>
                                <Link to={'/macos-client-configurations/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/macos-client-configurations/');}}>MacOS Client Configuration</Link>
                                <Link to={'/windows-client-setup-configuration/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/windows-client-setup-configuration/');}}>Windows Client Configuration</Link>
                            </div>
                        </div>
                    </div>
                    <Link to={'/contact-us/'} onClick={(e)=>{closeSidebar(); e.preventDefault(); window.location.assign('/contact-us/');}}>
                        <div className='sidebar-option-contact'>
                            <div>Contact Us</div>
                            <span><BiSolidDownArrow /></span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar
