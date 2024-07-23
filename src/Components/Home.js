import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Header";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    
    <section id="home">
    {/* Nội dung của trang chủ */}
    <div className="home-container">
      
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Phụ tùng yêu thích của bạn được lắp đặt
          </h1>
          <p className="primary-text">
          Những người thợ hàng đầu sẽ làm tất cả các công đoạn chuẩn bị, 
          như tháo bỏ phụ tùng cũ thay mới, để bạn có thể sử dụng tuyệt vời nhất.
          </p>
          <button className="secondary-button">
            Đặt Hàng Ngay <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;