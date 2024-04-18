import '../styles/HomePage.css'

import Fast from '../assets/Images/Fast.png'
import cyber from '../assets/Images/cyber.png'
import virtual from '../assets/Images/virtual.png'
import Connect from '../assets/Images/connect.png'
import AES from '../assets/Images/AES.png'
import Hotspot from '../assets/Images/Hotspot.png'
import { FaDribbble, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";

import BackToTopButton from './BackToTopButton'


const HomePage = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    // }, []);

    return (
        <div className="All">

            <div class="container-main">
                <div class="row total">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="setting">
                            <div class="out">
                                <div class="head1">
                                    <h1>FREE SSL VPN ON</h1>
                                </div>
                                <div class="head2">
                                    <h1>CENTOS 7</h1>
                                </div>
                                <div class="para2">
                                    <p>Be Secure | Protected | Private</p>
                                </div>
                            </div>
                            <div class="buttons">
                                <div class="button1">
                                    <button
                                        id="Bbutton"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            const pricingSection = document.getElementById("pricingSection");
                                            if (pricingSection) {
                                                pricingSection.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        GET IT NOW
                                    </button>
                                </div>
                                <div class="button2">
                                    <span class="glyphicon glyphicon-play" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 imaging">
                        <img id="imge" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/main-img.png" alt="" />
                        <img class="img-fluid" id="parts1" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/sheild.png" alt="" />
                        <img class="img-fluid" id="parts2" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/setting.png" alt="" />
                        <img class="img-fluid" id="parts3" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/box.png" alt="" />
                        <img class="img-fluid" id="parts4" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/lock.png" alt="" />
                        <img class="img-fluid" id="parts5" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/card.png" alt="" />
                        <img class="img-fluid" id="parts6" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/setting2.png" alt="" />
                        <img class="img-fluid" id="parts7" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/check.png" alt="" />
                    </div>
                </div>
            </div>




            

            <div className="home">
                <div className="work">
                    <h1>How it Works</h1>
                </div>
                <div className="paraSpeed">
                    <p>These speeds are excellent. It's rare that a "nixVPN" fast connection <br /> speeds across its network.</p>
                </div>
                <div className="connect">
                    <div className="easy">

                        <div className='imgWrap'><img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/07/easy_download_icon.png" alt="" /></div>
                        <h1 id='linkHead1'>Linux Client Configuration</h1>
                        {/* <p id='easyPara'>Private Internet the leading create <br /> several security providing safety <br /> on the internet.</p> */}
                    </div>
                    <div className="instant">
                        <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/07/instant_setup_icon.png" alt="" />
                        <h1 id='linkHead2'  >MacOs Client Configuration</h1>
                        {/* <p id='instantPara'>Srivate Internet the leading best create <br /> several security providing safety on the <br /> internet.</p> */}
                    </div>
                    <div className="enjoy">
                        <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/07/enjoy_wordwide_icon.png" alt="" />
                        <h1 id='linkHead3' >Windows Client Configuration</h1>
                        {/* <p id='enjoyPara'>Wrivate Internet the leading best create several security providing safety on the internet.</p> */}
                    </div>
                </div>

            </div>




            <div className="solutions">
                <div className="newimage">
                    <img id='computer' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/s_main.png" alt="" />
                    <img id='men' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/man.png" alt="" />
                    <img id='women' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/woman.png" alt="" />
                </div>
                <div className="sect">
                    <div className="simple1">
                        <h1>Yours Simple Solutions</h1>
                    </div>
                    <div className="simple2">
                        <h1>Online Privacy.</h1>
                    </div>
                    <div className="simple3">
                        <p id='rare'>These speeds are its excellent. It’s rare that a "nixVPN" fast connection <br /> speeds across its network. Private Internet its Access is the leadings <br />"nixVPN" Service provider.</p>
                    </div>

                    <div className="simpara">
                        <div className="secure1">
                            <div className="nowimg1">
                                <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/editor.svg" alt="" />
                            </div>
                            <div className="user1">
                                <h1>Government User</h1>
                                <p>Security providing you safety on the internet trice <br />worldwide access in 47+ countries.</p>
                            </div>
                        </div>

                        <div className="secure2">
                            <div className="nowimg2">
                                <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/eye.svg" alt="" />
                            </div>
                            <div className="user2">
                                <h1>Hidden Hackers</h1>
                                <p>Vecurity providing you safety on the internet trice <br />worldwide access in 36+ countries.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <section className="next">
                <div className="heading-container">
                    <h1 className="heading">Features</h1>
                    <p id='featureP'>These speeds are excellent. It's rare that a "nixVPN" fast connection <br />speeds across its network.</p>
                </div>

                <div className="features-container">
                    <div className="fast">
                        <img id='fastone' src={Fast} alt="" />
                        <h1>Free Services</h1>
                        <p>Be secure, be protected, be private,wherever and whenever you surf the net.  Mask your public IP address and encrypt connections. Use our superior authentication strength to protect privacy and impede unauthorizedaccess to your devices and network.</p>
                    </div>
                    <div className="cyber">
                        <img src={cyber} alt="" />
                        <h1>Cyber Security</h1>
                        <p>DDoS attacks count for a third of all downtime incidents, time when your network is vulnerable.Avert these cyber attacks and protect your devices against online threats and malware. We prevent more than one million cyber attacks per day.</p>
                    </div>
                    <div className="virtual">
                        <img src={virtual} alt="" />
                        <h1>Virtual Presence</h1>
                        <p>Connect your devices or network to any of our servers in the world for unrestricted access to  websites and information.Be where you want to be with the confidence of knowing your identity, your data and your connections are secure and private.</p>
                    </div>
                    <div className="nixvpn">
                        <img src={Connect} alt="" />
                        <h1>Connect to nixVPN</h1>
                        <p>Wherever you do business whether it's at home,over a public wi-fi or traveling, know that your connection is encrypted and yourIP address is anonymous. Your devices and network will remain secure and defended with nixVPN.</p>
                    </div>
                    <div className="aes">
                        <img src={AES} alt="" />
                        <h1>AES Encryption</h1>
                        <p>The worldwide standard in encryption is AES.The block size makes it virtually uncrackable, making it less  open to cyber attacks than other ciphers.AES is the leading encryption algorithm.</p>
                    </div>
                    <div className="hotspot">
                        <img src={Hotspot} alt="" />
                        <h1>HotSpot Protection</h1>
                        <p>Did you know you don’t control the hot spot you’re connected to when surfing the web at your favorite coffee shop? Our software makes sure your traffic is encrypted no matter who operates that public wi-fi.</p>
                    </div>
                </div>
            </section>


            <div id="pricingSection" className="home1">
                <div className="work1">
                    <h1 id='plan'>Pricing Plan</h1>
                </div>
                <div className="paraSpeed1">
                    <p>These speeds are excellent. It's rare that a "nixVPN" fast connection <br />speeds across its network.</p>
                </div>
                <div className="connect1">
                    <div className="easy1">

                        <h5 className='headTime1'>Monthly</h5>
                        <div className="money1">
                            <div className="dolicon1">
                                <h6 className='moneyIcon1'>$</h6>
                            </div>
                            <div className="num1">
                                <h1 id='rupee1'>3.66</h1>
                            </div>
                            <div className="mv1">
                                <h6 className='mo1'>/MO</h6>
                            </div>
                        </div>

                        <h6 id='save1'>Save 42%</h6>
                        <h6 id='get1'> $83.88</h6>
                        <p id='bulid1'>build payment every years</p>
                        <button id='btnsNew1'>GET IT NOW</button>
                    </div>

                    <div className="instant1">
                        <h5 className='headTime2'>Yearly</h5>
                        <div className="money2">
                            <div className="dolicon2">
                                <h6 className='moneyIcon2'>$</h6>
                            </div>
                            <div className="num2">
                                <h1 id='rupee2'>4.66</h1>
                            </div>
                            <div className="mv2">
                                <h6 className='mo2'>/MO</h6>
                            </div>
                        </div>

                        <h6 id='save2'>Save 42%</h6>
                        <h6 id='get2'> $83.88</h6>
                        <p id='bulid2'>build payment every years</p>
                        <button id='btnsNew2'>GET IT NOW</button>
                    </div>

                    <div className="enjoy1">
                        <h5 className='headTime3'>Lifetime</h5>
                        <div className="money3">
                            <div className="dolicon3">
                                <h6 className='moneyIcon3'>$</h6>
                            </div>
                            <div className="num3">
                                <h1 id='rupee3'>6.66</h1>
                            </div>
                            <div className="mv3">
                                <h6 className='mo3'>/MO</h6>
                            </div>
                        </div>

                        <h6 id='save3'>Save 42%</h6>
                        <h6 id='get3'> $83.88</h6>
                        <p id='bulid3'>build payment every years</p>
                        <button id='btnsNew3'>GET IT NOW</button>
                    </div>
                </div>

            </div>



            <div className="homes2">
                <div className="works2">
                    <h1>Service Team</h1>
                </div>
                <div className="paraSpeeds2">
                    <p>These speeds are excellent. It’s rare that a "nixVPN" fast connection <br />speeds across its network..</p>
                </div>
                <div className="connects2">
                    <div className="easys2">
                        <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img1.png" alt="" />
                        <h1>Michael Niotakis</h1>
                        <p>App Designer</p>
                        <div className="icons1">
                            <div className="driblleIcon1">
                                <FaDribbble id='driblleI1' />
                            </div>
                            <div className="twitterIcon1">
                                <FaTwitter id='twitterI1' />
                            </div>
                            <div className="lindinIcon1">
                                <FaLinkedinIn id='lindinI1' />
                            </div>
                        </div>
                    </div>
                    <div className="instants2">
                        <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img2.png" alt="" />
                        <h1>Lisa O'Keefee</h1>
                        <p>Graphics Designer</p>
                        <div className="icons2">
                            <div className="driblleIcon2">
                                <FaDribbble id='driblleI2' />
                            </div>
                            <div className="twitterIcon2">
                                <FaTwitter id='twitterI2' />
                            </div>
                            <div className="lindinIcon2">
                                <FaLinkedinIn id='lindinI2' />
                            </div>
                        </div>
                    </div>
                    <div className="enjoys2">
                        <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/Team_img3.png" alt="" />
                        <h1>Michael O'kentd</h1>
                        <p>App Developer</p>
                        <div className="icons3">
                            <div className="driblleIcon3">
                                <FaDribbble id='driblleI3' />
                            </div>
                            <div className="twitterIcon3">
                                <FaTwitter id='twitterI3' />
                            </div>
                            <div className="lindinIcon3">
                                <FaLinkedinIn id='lindinI3' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            


            <div className="homeOne">
                <div className="workOne">
                    <h1>Latest News</h1>
                </div>
                <div className="paraSpeedOne">
                    <p>These speeds are excellent. It’s rare that a "nixVPN" fast connection <br />speeds across its network.</p>
                </div>
                <div className="connectOne">
                   
                    <div className="enjoyOne">

                        <h1>Get Newsletter</h1>
                        <p>Yes, I would like receive Salesforce<br /> Weekly Brief as well marketings its <br /> thats the forefront of the industry <br />unsubscribe any time.</p>
                        <div className="emails">
                            <input type="email" placeholder="Enter email address" />
                        </div>
                        <button id='readIt3'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <BackToTopButton />
        </div>
    );
}

export default HomePage;