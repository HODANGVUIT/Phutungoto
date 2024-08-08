import React from "react";
import AboutBackground from "../Assets/introduce-background.png";
import AboutBackgroundImage from "../Assets/introduce-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Introduce = () => {
  return (
    <section id="introduce">
    <div className="introduce-section-container">
      <div className="introduce-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="introduce-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="introduce-section-text-container">
        <p className="primary-subheading">Giới Thiệu</p>
        <h1 className="primary-heading">
          Phụ tùng là một phần quan trọng của xe ô tô đảm bảo xe bền vững.
        </h1>
        <p className="primary-text">
        Phụ tùng không chỉ là linh kiện để lắp ráp hoặc thay thế các bộ phận,chi tiết cũ của xe
        hoạt động hàng ngày mà đóng vai trò quan trọng trong việc đảm bảo hoạt động an toàn, hiệu quả và bền bỉ của xe.
        </p>
        <p className="primary-text">
        Sử dụng những loại phụ tùng chất lượng cao, đúng loại sẽ giúp xe có thể hoạt động tốt nhất và nâng cao tuổi thọ trung bình của xe lên đáng kể.
        </p>
        <div className="introduce-buttons-container">
          <button className="secondary-button">Tìm Hiểu Thêm</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Xem Video
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Introduce;