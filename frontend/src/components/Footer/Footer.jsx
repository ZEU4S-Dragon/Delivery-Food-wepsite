import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer bg-[#a82d49]/90" id="footer">
      <div className="footer-contact">
        <div className="footer-contact-left">
          <img src={assets.logo2} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            consequatur, quos optio delectus laboriosam reprehenderit veritatis
            omnis accusamus iste sequi?
          </p>
          <div className="footer-socail-icon flex gap-6">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-contact-centar">
            <h2 className="text-xl font-[500]">COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-contact-right">
            <h2 className="text-xl font-[500]">GET IN TOUCH</h2>
            <ul>
                <li>+252613225103</li>
                <li>contact@YUM-RUN.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className=" footer-copyright">copyright 2024 © YUM-RUN.COM - All Right Reserved. </p>
    </div>
  );
};

export default Footer;
