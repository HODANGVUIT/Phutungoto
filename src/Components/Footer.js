import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Chất Lượng</span>
          <span>Trợ Giúp</span>
          <span>Chia Sẻ</span>
          <span>Nghề Nghiệp</span>
          <span>Đánh Giá</span>
          <span>Công Việc</span>
        </div>
        <div className="footer-section-columns">
          <span>034-673-2845</span>
          <span>21t1020838@husc.edu.vn</span>
          <span>hodangvu2003@gmail.com</span>
          <span>hodangvu2008@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Điều Khoản & Điều Kiện</span>
          <span>Chính sách bảo mật</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;