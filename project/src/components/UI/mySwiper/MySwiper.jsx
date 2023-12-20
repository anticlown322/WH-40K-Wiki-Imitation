// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Scrollbar } from 'swiper';

const MySwiper = () => {
    return (
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;