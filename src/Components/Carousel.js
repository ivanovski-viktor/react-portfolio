import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const carouselData = [
  {
    name: "HTML",
    img: require("../assets/html.png"),
  },
  {
    name: "CSS",
    img: require("../assets/css.png"),
  },
  {
    name: "javaScript",
    img: require("../assets/js.png"),
  },
  {
    name: "React",
    img: require("../assets/react.png"),
  },
  {
    name: "Sass",
    img: require("../assets/sass.png"),
  },
  {
    name: "Bootstrap",
    img: require("../assets/bootstrap.png"),
  },
  {
    name: "GIT",
    img: require("../assets/git.png"),
  },
  {
    name: "PHP",
    img: require("../assets/php.png"),
  },
  {
    name: "WordPress",
    img: require("../assets/wordpress.png"),
  },
];

export default function Carousel() {
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={6}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        300: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {carouselData.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                maxWidth: "250px",
              }}
              src={slide.img}
              alt="slide_image"
            />
            <h5 style={{ paddingBottom: "2rem", fontSize: "1rem" }}>
              {slide.name}
            </h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
