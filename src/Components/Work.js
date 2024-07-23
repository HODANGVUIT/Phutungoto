import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Chọn Phụ Tùng",
      text: "Hãy chọn một phụ tùng phù hợp với xe bạn,sở thích, chế độ của xe,chất lượng, ngân sách ",
    },
    {
      image: ChooseMeals,
      title: "Đặt Hàng",
      text: "Hãy đặt hàng những phụ tùng bạn muốn , đặt địa chỉ và số điện thoại đúng để nhận hàng ",
    },
    {
      image: DeliveryMeals,
      title: "Giao Hàng Nhanh",
      text: "Giao hàng miễn phí, giao hàng tận nhà, tiện lợi ",
    },
  ];
  return (
      <section id="work">
        {/* Nội dung của công việc */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Công Việc</p>
        <h1 className="primary-heading">Làm sao nó hoạt động</h1>
        <p className="primary-text">
        Với đội ngũ nhân viên có nhiều năm kinh nghiệm về lĩnh vực kinh doanh và phân phối phụ tùng ô tô du lịch, 
        100% sản phẩm được nhập khẩu trực tiếp từ những đối tác có thương hiệu của Nhật, Mỹ, Đức, Hàn Quốc.
        Mong muốn công ty chúng tôi là đem đến cho Quý khách hàng những mặt hàng và dịch vụ hoàn hảo nhất.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Work;