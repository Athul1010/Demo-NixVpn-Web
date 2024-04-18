import '../styles/About.css'
import { FaDribbble, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import data from '../assets/Images/data.png'
import management from '../assets/Images/management.png'
import network from '../assets/Images/network.png'
import satisfaction from '../assets/Images/satisfaction.png'
import news from '../assets/Images/news.png'
import natural from '../assets/Images/natural.png'
import flourish from '../assets/Images/flourish.png'
import CountUp from 'react-countup';

import { useEffect, useState } from "react";
import BackToTopButton from './BackToTopButton';






// import bg_shape from '../assets/Images/bg_shape.png'



const About = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    // }, []);

    return (
        <section className='mainAbout'>


            <div className="About">
                <div className="AboutHed">
                    <h1>About Us</h1>
                </div>
                <div className="homeHed">
                    <div className="HomeDot">
                        <h4>Home</h4>
                    </div>
                    <div className="myDot">
                        <h4>.</h4>
                    </div>
                    <div className="Dot">
                        <h4>About Us</h4>
                    </div>
                </div>
            </div>




            {/* <div className='banner'>
            <div className="solutionsTwo">
                <div className="newimageTwo ">
                    <img className='phone' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/s_main.png" alt="" />
                    <img className='mens' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/man.png" alt="" />
                    <img className='womenss' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/woman.png" alt="" />
                </div>
                <div className="sectTwo">
                    <div className="simple1Two">
                        <h1>Yours Simple Solutions</h1>
                    </div>
                    <div className="simple2Two">
                        <h1>Online Privacy.</h1>
                    </div>
                    <div className="simple3Two">
                        <p>These speeds are its excellent. It’s rare that a "dvpn" fast connection  speeds across its network. Private Internet its Access is the leadings <br />"dvpn" Service provider.</p>
                    </div>
                    
                    <div className="simparaTwo">
                        <div className="secure1Two">
                            <div className="nowimg1Two">
                                <img id='subImg1' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/editor.svg" alt="" />
                            </div>
                            <div className="user1Two">
                                <h1>Government User</h1>
                                <p>Security providing you safety on the internet trice worldwide access in 47+ countries.</p>
                            </div>
                        </div>
    
                        <div className="secure2Two">
                            <div className="nowimg2Two">
                                <img id='subImg2' src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/eye.svg" alt="" />
                            </div>
                            <div className="user2Two">
                                <h1>Hidden Hackers</h1>
                                <p>Vecurity providing you safety on the internet trice worldwide access in 36+ countries.</p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div> */}



            <div className='container-fluid solutionsTwo'>
                <div className="container">
                    <div className="row">
                        <div className="newimageTwo col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">

                                <img className="mens" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/man.png" alt="" />

                                <img className="womenss" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/woman.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                            <div className="sectTwo">
                                <div className="simple1Two">
                                    <h1>Yours Simple Solutions</h1>
                                </div>
                                <div className="simple2Two">
                                    <h1>Online Privacy.</h1>
                                </div>
                                <div className="simple3Two">
                                    <p>These speeds are its excellent. It’s rare that a "nixVPN" fast connection speeds across its network. Private Internet Access is the leading "nixVPN" Service provider.</p>
                                </div>
                                <div className="simparaTwo">
                                    <div className="secure1Two  d-flex align-items-center" >
                                        <div className="nowimg1Two">
                                            <img id="subImg1" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/editor.svg" alt="" />
                                        </div>
                                        <div className="user1Two">
                                            <h1>Government User</h1>
                                            <p>Security providing you safety on the internet trice worldwide access in 47+ countries.</p>
                                        </div>
                                    </div>
                                    <div className="secure2Two d-flex align-items-center" >
                                        <div className="nowimg2Two">
                                            <img id="subImg2" src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/eye.svg" alt="" />
                                        </div>
                                        <div className="user2Two">
                                            <h1>Hidden Hackers</h1>
                                            <p>Security providing you safety on the internet trice worldwide access in 36+ countries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>








            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <div className="container homes2y">
                <div className="row segment">
                    {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 works2y">
                    <h1>Service Team</h1>
                </div> */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 paraSpeeds2y">
                        <h1>Service Team</h1>
                        <p>These speeds are excellent. It’s rare that a "nixVPN" fast connection speeds across its network..</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 connects2y">
                        <div className="easys2y d-flex align-items-center justify-content-center flex-column">
                            <div className="imgWrapy1 mb-2">
                                <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img1.png" alt="" />
                            </div>
                            <h1>Michael Niotakis</h1>
                            <p>App Designer</p>
                            <div className="icons1y">
                                <div className="driblleIcon1y">
                                    <FaDribbble />
                                </div>
                                <div className="twitterIcon1y">
                                    <FaTwitter />
                                </div>
                                <div className="lindinIcon1y">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 connects2y">
                        <div className="instants2y d-flex align-items-center justify-content-center flex-column">
                            <div className='imgWrapy2 mb-2'>
                                <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img2.png" alt="" />
                            </div>
                            <h1>Lisa O'Keefee</h1>
                            <p>Graphics Designer</p>
                            <div className="icons2y">
                                <div className="driblleIcon2y">
                                    <FaDribbble />
                                </div>
                                <div className="twitterIcon2y">
                                    <FaTwitter />
                                </div>
                                <div className="lindinIcon2y">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 connects2y">
                        <div className="enjoys2y d-flex align-items-center justify-content-center flex-column">
                            <div className='imgWrapy3 mb-2'><img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/Team_img3.png" alt="" /></div>
                            <h1>Michael O'kentd</h1>
                            <p>App Developer</p>
                            <div className="icons3y">
                                <div className="driblleIcon3y">
                                    <FaDribbble />
                                </div>
                                <div className="twitterIcon3y">
                                    <FaTwitter />
                                </div>
                                <div className="lindinIcon3y">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="homes2y">
            <div className="works2y">
                <h1>Service Team</h1>
            </div>
            <div className="paraSpeeds2y">
                <p>These speeds are excellent. It’s rare that a "dvpn" fast connection <br />speeds across its network..</p>
            </div>
            <div className="connects2y">
                <div className="easys2y">
                   <div className='imgWrapy'  > <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img1.png" alt="" /></div>
                    <h1>Michael Niotakis</h1>
                    <p>App Designer</p>
                    <div className="icons1y">
                        <div className="driblleIcon1y">
                            <FaDribbble/>
                        </div>
                        <div className="twitterIcon1y">
                            <FaTwitter/>
                        </div>
                        <div className="lindinIcon1y">
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
                <div className="instants2y">
                    <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/team_img2.png" alt="" />
                    <h1>Lisa O'Keefee</h1>
                    <p>Graphics Designer</p>
                    <div className="icons2y">
                        <div className="driblleIcon2y">
                            <FaDribbble/>
                        </div>
                        <div className="twitterIcon2y">
                            <FaTwitter/>
                        </div>
                        <div className="lindinIcon2y">
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
                <div className="enjoys2y">
                    <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/08/Team_img3.png" alt="" />
                    <h1>Michael O'kentd</h1>
                    <p>App Developer</p>
                    <div className="icons3y">
                        <div className="driblleIcon3y">
                            <FaDribbble/>
                        </div>
                        <div className="twitterIcon3y">
                            <FaTwitter/>
                        </div>
                        <div className="lindinIcon3y">
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
            </div>

        </div> */}

            {/* --------------------------------------------Team------------------------------------------------------------ */}


            <div className="container_Team">
                <div className="row Team">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 support">
                        <div className="imgSupport1">
                            <img src={management} alt="" />
                        </div>
                        <div className="numSupport1">
                            <h1><CountUp end={1200} duration={10} /></h1>
                        </div>
                        <div className="parSupport1">
                            <p>Support Team</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12  partner">
                        <div className="imgSupport2">
                            <img src={network} alt="" />
                        </div>
                        <div className="numSupport2">
                            <h1><CountUp end={1469} duration={10} /></h1>
                        </div>
                        <div className="parSupport2">
                            <p>Trusted Partner</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12  client">
                        <div className="imgSupport3">
                            <img src={satisfaction} alt="" />
                        </div>
                        <div className="numSupport3">
                            <h1><CountUp end={3696} duration={10} /></h1>
                        </div>
                        <div className="parSupport3">
                            <p>Client Satisfaction</p>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12  app">
                        <div className="imgSupport4">
                            <img src={data} alt="" />
                        </div>
                        <div className="numSupport4">
                            <h1><CountUp end={9646} duration={10} /></h1>
                        </div>
                        <div className="parSupport4">
                            <p>App Download</p>
                        </div>
                    </div>

                </div>
            </div>




            {/* <div className="Team">
            
            <div className="support">
                <div className="imgSupport1">
                    <img src={management} alt="" />
                </div>
                <div className="numSupport1">
                    <h1>1,200</h1>
                </div>
                <div className="parSupport1">
                    <p>Support Team</p>
                </div>
            </div>
            <div className="partner">
                <div className="imgSupport2">
                    <img src={network} alt="" />
                </div>
                <div className="numSupport2">
                    <h1>1,469</h1>
                </div>
                <div className="parSupport2">
                    <p>Trusted Partner</p>
                </div>
            </div>
            <div className="client">
                <div className="imgSupport3">
                    <img src={satisfaction} alt="" />
                </div>
                <div className="numSupport3">
                    <h1>3,696</h1>
                </div>
                <div className="parSupport3">
                    <p>Client Satisfaction</p>
                </div>
            </div>
            <div className="app">
                <div className="imgSupport4">
                    <img src={data} alt="" />
                </div>
                <div className="numSupport4">
                    <h1>9,646</h1>
                </div>
                <div className="parSupport4">
                    <p>App Download</p>
                </div>
            </div>
        </div> */}

            {/* ...........................................Team......................................................... */}
            {/* <div className="customersq">
            <div className="titleHeadyq">
                <h1>Customers Feedback</h1>
            </div>
            <div className="paraHeadq">
                <p>These speeds are excellent. It's rare that a "dvpn" fast connection speeds across its network.</p>
            </div>
            <div className="feedbackq">
                <div className="matiaq">
                    <div className="paraWatch1q">
                         <p>Program easy to use, i feel very safe, very affordable the i  can watches my favourites shows France its the America  problem Whatsoever to offer that others</p>
                    </div>
                    <div className="things1q">
                        <div className="resls1q">
                            <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/06/testimonial_1-2.png" alt="" />
                        </div>
                        <div className="resls2q">
                            <div className="williq">
                                <div className="blkq">
                                    <h4>William Blake</h4>
                                </div>
                                <div className="coq">
                                    <h4>CO-Founder</h4>
                                </div>
                            </div>
                        </div>
                        <div className="resls3q">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                    </div>
                </div>

                <div className="rockq">
                    <div className="paraWatch2q">
                        <p>Program easy to use, i feel very safe, very affordable the i can watches my favourites shows France its the America  problem Whatsoever to offer that others</p>
                    </div>
                    <div className="things2q">
                        <div className="resls4q">
                            <img src="https://themelooks.net/demo/dvpn/wp-content/uploads/2020/06/testimonial_2-1.png" alt="" />
                        </div>
                        <div className="resls5q">
                            <div className="benq">
                                <div className="horrowq">
                                    <h4>Ben Horowitz</h4>
                                </div>
                                <div className="chiefq">
                                    <h4>Chief Officer</h4>
                                </div>
                            </div>
                        </div>
                        <div className="resls6q">
                           <AiFillStar/>
                           <AiFillStar/>
                           <AiFillStar/>
                           <AiFillStar/>
                           <AiFillStar/>
                        </div>
                    </div>
                </div>

                

            </div>
        </div> */}









            {/* <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={news} alt="" />
		</div>
		<div class="slide">
			<img src={natural}  alt="" />
		</div>
		<div class="slide">
			<img src={flourish}  alt="" />
		</div>
		<div class="slide">
			<img src={news}  alt="" />
		</div>
		<div class="slide">
			<img src={natural}  alt="" />
		</div>
		<div class="slide">
			<img src={flourish}  alt="" />
		</div>
		<div class="slide">
			<img src={news}  alt="" />
		</div>
		<div class="slide">
			<img src={natural} alt="" />
		</div>
		<div class="slide">
			<img src={flourish} alt="" />
		</div>
		<div class="slide">
			<img src={news} alt="" />
		</div>
		<div class="slide">
			<img src={natural} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={flourish} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={news} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={natural} height="100" width="250" alt="" />
		</div>
	</div>
</div> */}



            <BackToTopButton />

        </section >

    );
}

export default About;