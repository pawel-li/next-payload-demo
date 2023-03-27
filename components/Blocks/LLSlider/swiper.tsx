// eslint-disable-next-line import/extensions
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCreative, Keyboard, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';
import { SectionContainer } from '../../SectionContainer';
import 'swiper/css/bundle';
import { Gutter } from '../../Gutter';


const Swiperjs = ({ slides }) => {
  return (
    <Swiper
      speed={700}
      loop
      pagination={false}
      navigation={false}
      centeredSlides={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      grabCursor={false}
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: [0, 0, -400],
          opacity: 0
        },
        next: {
          translate: ["100%", 0, 0],
          opacity: 1
        },
      }}
      modules={[EffectCreative, Scrollbar, A11y, Autoplay, Keyboard, Parallax]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        data-swiper-parallax="-23%"
      />

      {slides.map((slide, i) =>
        <SwiperSlide key={i}>
          <div className="py-32 mt-6 bg-white">
          <Gutter>
              <h1
                className="mt-6 font-sans text-4xl font-medium tracking-tight text-black dark:text-white"
                data-swiper-parallax="-300"
              >{slide.main_title}</h1>
              <div className="mt-6 space-y-6 lg:max-w-xl">
                <p
                  className="mt-4 text-lg text-slate-400 dark:text-slate-300 lg:text-2xl"
                  data-swiper-parallax="-100"
                >
                  {slide.sub_title}
                </p>
              </div>
            </Gutter>
          </div>
        </SwiperSlide>
      )}

    </Swiper>
  );
};

export default Swiperjs;