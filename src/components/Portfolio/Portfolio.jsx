
import "./Portfolio.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { sliderSettings } from '../../utils/common';
import "swiper/css";
import data from '../../utils/slider.json';
// import lmhousing from "../../img/lmhousing.png";
// import airbnb from "../../img/airbnb.png";


const Portfolio = () => {
  
  return (
    <div className=".p-wrapper">
      {/* heading */}
      <div className="p-center">
        <span className="heading">Recent Projects</span>
        <span className="primaryText">Portfolio</span>
      </div>
      

      {/* slider */}
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={lmhousing} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={airbnb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lmhousing} alt="" />
        </SwiperSlide>
        
      </Swiper> */}

          <Swiper {...sliderSettings}>
                <SliderButtons /> 
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />                                    
                                <span>{card.price}</span>                              

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                                <div className="buttons">
                                  <a href={card.view}>
                                    <button className="button c-button" >View</button>
                                  </a>
                                  <a href={card.github}>
                                    <button className="button c-button">GitHub</button>
                                  </a>
                                  
                                </div>
                                
                            </div>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
    </div>
  );
};

export default Portfolio;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
      <div className="r-buttons">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
  );
};