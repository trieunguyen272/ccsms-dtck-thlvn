import React, { useState, useEffect } from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-home">
      <div className="contact-item">
        <h2
          style={{
            fontSize: "1.3rem",
            width: "90%",
            marginLeft: "-5rem",
            fontFamily: "Times New Roman",
          }}
        >
          <b>Mọi chi tiết xin quý khách vui lòng liên hệ: BLUE CHIC Computer</b>
        </h2>
        <h2
          style={{
            fontSize: "1.3rem",
            width: "90%",
            marginLeft: "-9.8rem",
            fontFamily: "Times New Roman",
          }}
        >
          <i class="fas fa-map-marker-alt"></i> 332 Hoàng Văn Thụ, Tp Quy Nhơn,
          Bình Định
        </h2>
        <h2
          style={{
            fontSize: "1.3rem",
            width: "90%",
            marginLeft: "-14.3rem",
            fontFamily: "Times New Roman",
          }}
        >
          <i class="fas fa-phone"></i> (028)73013878 - 0909305053
        </h2>
        <h2
          style={{
            fontSize: "1.3rem",
            width: "90%",
            marginLeft: "-7.6rem",
            fontFamily: "Times New Roman",
          }}
        >
          <i class="fas fa-door-open"></i> 9h đến 20h từ thứ 2 đến thứ 7, Chủ
          nhật từ 10h đến 19h
        </h2>
        <h2
          style={{
            fontSize: "1.3rem",
            width: "90%",
            marginLeft: "-14.7rem",
            fontFamily: "Times New Roman",
          }}
        >
          <i class="fas fa-globe-asia"></i> www.bluechiccomputer.com
        </h2>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.154380061139!2d109.21261801414323!3d13.7695621005931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6c967e0f13eb%3A0x88cfaee5bd08895d!2zMzMyIEhvw6BuZyBWxINuIFRo4bulLCBOZ8O0IE3DonksIFRow6BuaCBwaOG7kSBRdWkgTmjGoW4sIELDrG5oIMSQ4buLbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1620052677885!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
