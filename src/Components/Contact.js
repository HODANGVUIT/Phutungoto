import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      {/* Nội dung của liên hệ */}
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Bạn Có Thắc Mắc Gì?</h1>
      <h1 className="primary-heading">Hãy để chúng tôi giúp bạn</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Nhập Vào Đây" />
        <button className="secondary-button">Gửi</button>
      </div>
    </div>
    </section>
  );
};

export default Contact;