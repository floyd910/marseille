import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://lh6.googleusercontent.com/proxy/xDXSHbSTyCk3mZnbG8IdPj-5sdc-nbIPOuH-m2dAqNhNU9xbJWhwDGbFFmVgDc6Lu5wmZ_g3m04",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOL2RqHqA02CKgJBr3n1GjZovPqgoaxRHODdyFvAm6T4OFrjrpeAKQkglhiwVyvWedho&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsWkkK3RBJFyYwJO1nP5v7TLMoWma5lBGi2Xw9DrZSg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvX8CtrTVKSPmXn_Ig0hE3rg9UeDvyxb342MTnBicpA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhtZzPAr3VqDdjVEaQ3DeSPdfWcbD_5QiEcWAGbmbmQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqfxAlQ60bH2D5Pd6SMl8QOPPauo6faJPkrSh0FCNYw&s",
  ];

  return (
    <div className="gallery">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Swiper>
    </div>
  );
}
