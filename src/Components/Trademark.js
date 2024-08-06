import React from "react";
import logo1 from "../Assets/logo-mercedes.png";
import logo2 from "../Assets/logo-audi.png";
import logo3 from "../Assets/logo-bmw.png";
import logo4 from "../Assets/logo-chevrolet.png";
import logo5 from "../Assets/logo-ford.png";
import logo6 from "../Assets/logo-honda.png";
import logo7 from "../Assets/logo-hyundai.png";
import logo8 from "../Assets/logo-nissan.png";
import logo9 from "../Assets/logo-isuzu.png";
import logo10 from "../Assets/logo-kia.png";
import logo11 from "../Assets/logo-mazda.png";
import logo12 from "../Assets/logo-mitsubishi.png";
import logo13 from "../Assets/toyota.png";

const Trademark = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13];

  return (
    <div className="trademark-wrapper">
      <h2 className="trademark-title">Danh sách thương hiệu Ô tô</h2>
      <div className="trademark-scroll-container">
        <div className="trademark-container">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="trademark-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trademark;
