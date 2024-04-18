import video_img from '../assets/Images/video_img-1.png'
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
import data from '../assets/Images/data.png'
import management from '../assets/Images/management.png'
import network from '../assets/Images/network.png'
import satisfaction from '../assets/Images/satisfaction.png'
import React, { useState, useEffect } from "react";
import login from '../assets/Images/login.jpg'
import Package from '../assets/Images/Package.jpg'
import VPN from '../assets/Images/VPN.png'
import ConfigureVPN from '../assets/Images/ConfigureVPN.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import secure from '../assets/Images/secure.png'
import point from '../assets/Images/point.jpg'
import '../styles/MacOs_Client_Configuration.css'
import BackToTopButton from "./BackToTopButton";

import CountUp from 'react-countup'; //for counting up


const MacOs_Client_Configuration = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);

    };

    // .....................................................................
    const [activeIndex, setActiveIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex.includes(index) ? prevIndex.filter((i) => i !== index) : [...prevIndex, index]));
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    // }, []);

    return (
        <div className="service">

            <div className='lorem'>
                <div className="servHead">
                    <h1>MacOs Client Configuration</h1>
                </div>
                <div className="mainHed">
                    <div className="nowHom">
                        <h4>Home</h4>
                    </div>
                    <div className="DotNow1">
                        <h4>.</h4>
                    </div>
                    <div className="nowServ">
                        <h4>How it works</h4>
                    </div>
                    <div className="DotNow2">
                        <h4>.</h4>
                    </div>
                    <div className="nowDesn">
                        <h4>MacOs Client Configuration</h4>
                    </div>
                    {/* <div className="DotNow3">
                        <h4>.</h4>
                    </div>
                    <div className="nowHidn">
                        <h4>No Hidden Price</h4>
                    </div> */}
                </div>
            </div>


            <div className="Arrangement">
                <div className="vedio">
                    <div className='redImg'>
                        <img src={video_img} alt="" />
                        {/* <div className='vscButton2'>
                           <button onClick={toggleModal} className='vsc2'><VscDebugStart/></button> 
                        </div> */}

                    </div>
                </div>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ni5hRK1ehzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )}
                <div className="FullGurd">
                    <div className="trusts">
                        <h1>Setting up NixVPN, the FREE SSLVPN client on a Linux system is pretty straight forward.</h1>
                    </div>
                    <div className="taglinez">
                        <p>Security companies are working all around the world to protect homes offices and other buildings. Many security companies are using slogan taglines to distinguishs themselves from their competitors and tell the public they are the best & why they should hire them for their security Thinking a slogan or tagline for a security.</p>
                    </div>
                    <div className="btn-get">
                        <button id='btnsNew4z1'>GET IT NOW</button>
                    </div>
                </div>
            </div>



            <div className="Works">

                <div className="workHeading">
                    <h1>How it Works</h1>
                </div>
                <div className="workPara">
                    <p>Security companies are working all around the world to protect homes, offices and other buildings. Many security companies are using slogans and taglines to distinguish themselves from their competitors and to tell the public why they are the best and why they should hire them for their security. Thinking a slogan or tagline for a security company can be very hard. In this post, we have gathered.</p>
                </div>

            </div>



            <div className='whatIs'>
                <h1
                    className={`accordion ${activeIndex.includes(0) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(0)}
                >
                    <AiOutlinePlus className='plus1' /> Step 1
                </h1>
                <div className={`panel ${activeIndex.includes(0) ? 'show' : ''}`}>
                    <p id='userDet1'>Login to the user portal provided by your System Administrator.​</p>
                    <p className='pink-text'>Eg: htts://vpn.yourcompany.com:7443/</p>
                    <img id='step1' src={login} alt="" />
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(1) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(1)}
                >
                    <AiOutlinePlus className='plus2' /> Step 2
                </h1>
                <div className={`panel ${activeIndex.includes(1) ? 'show' : ''}`}>
                    <p id='userDet2'>Once logged in, Download the Client package by clicking on MACOS CLIENT.</p>

                    <img id='step2' src={Package} alt="" />
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(2) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(2)}
                >
                    <AiOutlinePlus className='plus3' /> Step 3
                </h1>
                <div className={`panel ${activeIndex.includes(2) ? 'show' : ''}`}>
                    <p id='userDet3'>Once downloaded, extract the package and install the Tunnelblick on your macOS.</p>
                    {/* <p>Select the NixVPN.ovpn file and click on import.</p> */}
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(3) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(3)}
                >
                    <AiOutlinePlus className='plus4' /> Step 4
                </h1>
                <div className={`panel ${activeIndex.includes(3) ? 'show' : ''}`}>
                    <p id='install'>Once installed, Start the Tunnelblick software from the launcher menu.</p>
                    {/* <p id='ubuntu'>Eg: on ubuntu,</p>
        <p id='pink'>sudo apt-get install network-manager-openvpn-gnome network-manager-vpnc-gnome</p> */}
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(4) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(4)}
                >
                    <AiOutlinePlus className='plus4' /> Step 5
                </h1>
                <div className={`panel ${activeIndex.includes(4) ? 'show' : ''}`}>
                    {/* <li id='Connections1'>Click on the&nbsp;<span id='fontSize1'>Network Connections</span></li> */}
                    <li id='Connections2'>Now drag and drop the downloaded<span id='fontSize2'>NixVPN.ovpn</span>&nbsp; file to the <span id='fontSize3'>Tunnelblick</span>&nbsp;Window.</li>
                    {/* <li id='Connections3'>Browse to the extracted NixVPN.ovpn file and click<span id='fontSize4'>&nbsp;import.</span></li> */}
                    {/* <img id='vpnImage' src={VPN} alt="" /> */}
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(5) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(5)}
                >
                    <AiOutlinePlus className='plus4' /> Step 6
                </h1>
                <div className={`panel ${activeIndex.includes(5) ? 'show' : ''}`}>
                    <li id='browse1'>Click on the&nbsp;<span id='files1'>Source File</span>&nbsp;Section, browse to the ZIP extracted place</li>
                    <li id='browse2'>Select the &nbsp;<span id='files2'>NixVPN.ovpn</span>&nbsp;file and click on&nbsp;<span id='files3'>import.</span></li>
                    {/* <img src={secure} alt="" /> */}
                </div>

                <h1
                    className={`accordion ${activeIndex.includes(6) ? 'active' : ''}`}
                    onClick={() => handleAccordionClick(6)}
                >
                    <AiOutlinePlus className='plus4' /> Step 7
                </h1>
                <div className={`panel ${activeIndex.includes(6) ? 'show' : ''}`}>
                    <p id='window'>Now Click on the &nbsp;<span id='Uname'>  NixVPN </span>&nbsp; to get connected.</p>
                    {/* <img src={point} alt="" /> */}
                </div>

                {/* <h1
        className={`accordion ${activeIndex === 7 ? "active" : ""}`}
        onClick={() => handleAccordionClick(7)}
      >
        <AiOutlinePlus className='plus4'/> Step 8
      </h1>
      <div className={`panel ${activeIndex === 7 ? "show" : ""}`}>
        <p id='newNix'>Now, click on&nbsp;<span id='nameNixvpn'>NixVPN</span>&nbsp;on the VPN connection name to get connected.</p>
        <img id='ConfigureVPN' src={ConfigureVPN} alt="" />
      </div> */}
                <div className='vpn-connect-text'>
                    <h1 id='headCard'>That’s it, Now you are connected to your NixVPN server.</h1>
                </div>


            </div>



            {/* <div className="empResults">
                <div className="dist1">
                    <div>
                        <AiOutlineArrowRight className='arrow1'/>
                    </div>
                    <div>
                        <p>The result of employees, over detailers and engineers</p>
                    </div>
                </div>
                <div className="dist2">
                    <div>
                        <AiOutlineArrowRight className='arrow2'/>
                    </div>
                    <div>
                        <p>All coming together to solve problem before.</p>
                    </div>
                </div>
                <div className="dist3">
                    <div>
                        <AiOutlineArrowRight className='arrow3'/>
                    </div>
                    <div>
                        <p>Teamwork it demonstrates both internally and externally</p>
                    </div>
                </div>
                <div className="dist4">
                    <div>
                        <AiOutlineArrowRight className='arrow4'/>
                    </div>
                    <div>
                        <p>Outstanding in the creation of landmark buildings</p>
                    </div>
                </div>
                <div className="dist5">
                    <div>
                        <AiOutlineArrowRight className='arrow5'/>
                    </div>
                    <div>
                        <p>The result of employees, over detailers and engineers</p>
                    </div>
                </div>
        </div> */}



            <div className="Teamz">

                <div className="supportz">
                    <div className="imgSupport1z">
                        <img src={management} alt="" />
                    </div>
                    <div className="numSupport1z">
                        <h1><CountUp end={1200} duration={10} /></h1>
                    </div>
                    <div className="parSupport1z">
                        <p>Support Team</p>
                    </div>
                </div>
                <div className="partnerz">
                    <div className="imgSupport2z">
                        <img src={network} alt="" />
                    </div>
                    <div className="numSupport2z">
                        <h1><CountUp end={1469} duration={10} /></h1>
                    </div>
                    <div className="parSupport2z">
                        <p>Trusted Partner</p>
                    </div>
                </div>
                <div className="clientz">
                    <div className="imgSupport3z">
                        <img src={satisfaction} alt="" />
                    </div>
                    <div className="numSupport3z">
                        <h1><CountUp end={3696} duration={10} /></h1>
                    </div>
                    <div className="parSupport3z">
                        <p>Client Satisfaction</p>
                    </div>
                </div>
                <div className="appz">
                    <div className="imgSupport4z">
                        <img src={data} alt="" />
                    </div>
                    <div className="numSupport4z">
                        <h1><CountUp end={9646} duration={10} /></h1>
                    </div>
                    <div className="parSupport4z">
                        <p>App Download</p>
                    </div>
                </div>
            </div>


            <div className="home1z">
                <div className="work1z">
                    <h1>Pricing Plan</h1>
                </div>
                <div className="paraSpeed1z">
                    <p>These speeds are excellent. It's rare that a "nixVPN" fast connection speeds across its network.</p>
                </div>
                <div className="connect1z">
                    <div className="easy1z">

                        <h5>Monthly</h5>
                        <div className="money1z">
                            <div className="dolicon1z">
                                <h6 className='cashIcon1'>$</h6>
                            </div>
                            <div className="num1z">
                                <h1 id='rupee1z'>3.66</h1>
                            </div>
                            <div className="mv1z">
                                <h6 className='moIcon1'>/MO</h6>
                            </div>
                        </div>

                        <h6 className='card-sub'>Save 42%</h6>
                        <h6 className='card-sub'> $83.88</h6>
                        <p>build payment every years</p>
                        <button id='btnsNew1z'>GET IT NOW</button>
                    </div>

                    <div className="instant1z">
                        <h5>Yearly</h5>
                        <div className="money2z">
                            <div className="dolicon2z">
                                <h6 className='cashIcon2'>$</h6>
                            </div>
                            <div className="num2z">
                                <h1 id='rupee2z'>4.66</h1>
                            </div>
                            <div className="mv2z">
                                <h6 className='moIcon2'>/MO</h6>
                            </div>
                        </div>

                        <h6 className='card-sub'>Save 42%</h6>
                        <h6 className='card-sub'> $83.88</h6>
                        <p>build payment every years</p>
                        <button id='btnsNew2z'>GET IT NOW</button>
                    </div>

                    <div className="enjoy1z">
                        <h5>Lifetime</h5>
                        <div className="money3z">
                            <div className="dolicon3zz">
                                <h6 className='cashIcon3'>$</h6>
                            </div>
                            <div className="num3z">
                                <h1 id='rupee3z'>6.66</h1>
                            </div>
                            <div className="mv3z">
                                <h6 className='moIcon3'>/MO</h6>
                            </div>
                        </div>

                        <h6 className='card-sub'>Save 42%</h6>
                        <h6 className='card-sub'> $83.88</h6>
                        <p>build payment every years</p>
                        <button id='btnsNew3z'>GET IT NOW</button>
                    </div>
                </div>

            </div>




            <BackToTopButton />
        </div>
    );
}

export default MacOs_Client_Configuration;