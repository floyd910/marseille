import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOL2RqHqA02CKgJBr3n1GjZovPqgoaxRHODdyFvAm6T4OFrjrpeAKQkglhiwVyvWedho&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsWkkK3RBJFyYwJO1nP5v7TLMoWma5lBGi2Xw9DrZSg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvX8CtrTVKSPmXn_Ig0hE3rg9UeDvyxb342MTnBicpA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhtZzPAr3VqDdjVEaQ3DeSPdfWcbD_5QiEcWAGbmbmQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqfxAlQ60bH2D5Pd6SMl8QOPPauo6faJPkrSh0FCNYw&s",
  ];

  return (
    <div className="gallery">
      <div className="desktop">
      <Swiper
        spaceBetween={5}
        slidesPerView={3.2}
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
      <div className="tablet">
      <Swiper
        spaceBetween={5}
        slidesPerView={2.2}
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
     <div className="mobile">
     <Swiper
        spaceBetween={5}
        slidesPerView={1.2}
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
    </div>
  );
}
