import React from "react";
import "./Testimonials.css";
import TestimonialsHolder from "./TestimonialsHolder";
import TestimonialData from "../../TestimonialsData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function Testimonials() {
  const [sliderViews, setSliderView] = React.useState(3);
  React.useEffect(() => {
    const HandleResize = () => {
      if (window.innerWidth > 1000) {
        setSliderView(3);
      } else if (window.innerWidth > 900) {
        setSliderView(2);
      } else if (window.innerWidth > 846) {
        setSliderView(2);
      } else {
        setSliderView(1);
      }
    };

    window.addEventListener("resize", HandleResize);
    HandleResize();
    return () => window.removeEventListener("resize", HandleResize);
  }, []);
  const Holder = TestimonialData.map((item) => (
    <SwiperSlide>
      <TestimonialsHolder key={item.id} item={item} />
    </SwiperSlide>
  ));
  return (
    <div className="Testimonials-container">
      <div className="Testimonials-header">
        <h1>Testimonials</h1>
      </div>
      <Swiper
        className="Testimonials"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={sliderViews}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Holder}
      </Swiper>
    </div>
  );
}

export default Testimonials;
