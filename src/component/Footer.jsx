import React from 'react'
import '../styles/Footer.css'

import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import 'typeface-roboto';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div class="footer">
                <div className='container-fluid'>
                    <div class="container container-md-12 custom-container-sm">
                        <div class="row links">
                            <div class="col-lg-4 col-sm-5 col-xs-12">
                                <div class="single_footer">
                                    <div className='single_footer_container'>
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li><Link to={'/about-us/'} onClick={()=>window.location.href('/about-us/')}>About Us</Link></li>
                                            <li><Link to={'/linux-client-configuration/'} onClick={()=>window.location.href('/linux-client-configuration/')}>Linux Configuration</Link></li>
                                            <li><Link to={'/macos-client-configurations/'} onClick={()=>window.location.href('/macos-client-configurations/')}>MacOS Configuration </Link></li>
                                            <li><Link to={'/windows-client-setup-configuration/'} onClick={()=>window.location.href('/windows-client-setup-configuration/')}>Windows Configuration</Link></li>
                                            <li><Link to={'/contact-us/'} onClick={()=>window.location.href('/contact-us/')}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="single_footer single_footer_address">
                                    <h4>Page Link</h4>
                                    <ul>
                                        <li><a href="#">Lorem Ipsum</a></li>
                                        <li><a href="#">Simply dummy text</a></li>
                                        <li><a href="#">The printing and typesetting </a></li>
                                        <li><a href="#">Standard dummy text</a></li>
                                        <li><a href="#">Type specimen book</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div class="col-md-5 col-sm-5 col-xs-12 d-flex justify-content-center align-items-flex-start flex-column">
                                <div class="single_footer1 single_footer_address">
                                    <h5 className='address'>
                                        <span><FaMapMarkerAlt /></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className='main-address'>
                                            <span>HAZERCLOUD INFOTECH LLP</span>
                                            <div>
                                                No. 4/461, 2nd Floor, Suite No.747,
                                                Valamkottil Towers, Judgemukku,
                                                Kakkanad, Kochi - 682021
                                            </div>
                                        </div>
                                    </h5>
                                    <h5><MdEmail /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support@nixvpn.com</h5>
                                    <h5><FaPhone /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 1234567890</h5>

                                </div>
                                <div class="social_profile">
                                    <ul>
                                        <li><Link to={''}><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to={''}><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to={''}><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link to={''}><i class="fa-brands fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 col-xs-12">
                                <p class="copyright">Copyright © 2023 &nbsp; <Link to={''}>nixvpn.com</Link> &nbsp; Allright reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
