import React from 'react';
import Image from "next/image";
import styleimg from "../asset/styimg.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

const Banner = ({ value }) => {
//   console.log(value);


  return (
    <div className='banner-container'>
        <Image
        src={styleimg}
        className='style-img'
        alt="Style Image" 
        width={20000} 
        height={900} 
      />
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {value.banners.map((banner, index) => (
        <SwiperSlide key={index} className="banner-container">
          <Image 
            src={banner.bannerImage.node.sourceUrl} 
            className='banner-img' 
            alt={banner.bannersTitle} 
            width={1336} 
            height={650} 
          />
          <h2 className="banner-title">{banner.bannersTitle}</h2>
          <p className="banner-description">{banner.bannerDescription}</p>
          <a className='banner-button' href={banner.bannerButton.url} target={banner.bannerButton.target}>
            {banner.bannerButton.title}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Banner;
