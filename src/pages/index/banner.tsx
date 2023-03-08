import React, { FC } from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from 'static/banner-1.svg';
import banner2 from 'static/banner-2.svg';
import banner3 from 'static/banner-3.svg';
import banner4 from 'static/banner-4.svg';
import banner5 from 'static/banner-5.svg';
import { Box } from "zmp-ui";

export const Banner: FC = () => {
  return (
    <Box className="bg-white" pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
        autoplay
        loop
      >
        {[banner1, banner2, banner3, banner4, banner5].map((banner, i) => <SwiperSlide className="px-4" key={i}>
          <img className="w-full" src={banner} />
        </SwiperSlide>)}
      </Swiper>
    </Box>
  );
}
