import React from 'react';
import './youtube.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import maluma from "../../assets/images/maluma.gif";
import maluma1 from "../../assets/images/Maluma1.gif";
import eladio from "../../assets/images/eladio.jpg";

function YoutubePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="content" id="flex">
        <Slider {...sliderSettings}>
          <div>
            <img src={maluma} class="slidePic" />
          </div>
          <div>
          <img src={maluma1} class="slidePic"/>
          </div>
          <div>
          <img src={eladio} class="slidePic"/>
          </div>
        </Slider>
      </div>
  );
}

export default YoutubePage;
