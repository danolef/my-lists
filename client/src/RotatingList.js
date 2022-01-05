import React from "react";
import Slider from "react-slick";
import "./styles.css"

export default function RotatingList() {
  const settings = {
    arrows: true,
    dots: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>uno</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNSR8_oAgw8zstz_tTuzZdkGYQmwkgMeHfA&usqp=CAU" alt="first slide" />
      </div>
      <div>
        <h3>dos</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoOOsEH2E-3E05nW73DMbueqcA53Z-i5RGg&usqp=CAU" alt="first slide" />
      </div>
      <div>
        <h3>tres</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGACqH1WnGgfwdzoanOsLSr_hpt0rKLhrr2g&usqp=CAU" alt="first slide" />
      </div>
      <div>
        <h3>cuatro</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6HcbL4_TsTQcuGyzahCy1ntkXal5dh0Mg&usqp=CAU" alt="first slide" />
      </div>
      <div>
        <h3>cinco</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9LEMu1-3mGKAyEZPfd3M423I3gNiif-p2Q&usqp=CAU" alt="first slide" />
      </div>
      <div>
        <h3>seis</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW4eNxxfnvUxr1AA31tcz6MaAoDS5Hy1z6w&usqp=CAU" alt="first slide" />
      </div>
    </Slider>
  );
}
