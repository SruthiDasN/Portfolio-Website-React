
import "./Certification.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { sliderSettings } from '../../utils/common';
import "swiper/css";
import data from '../../utils/certifications.json';



const Certification = () => {  
  
  return (
    <div className=".p-wrapper" id='Certification' >

      {/* heading */}
      <div className="p-center">
        <span className="heading">Certifications</span>
        <span className="primaryText">from Meta</span>
      </div>   

          <Swiper {...sliderSettings}>
               <SliderButtons /> 
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />                                    
                                <span>{card.source}</span>                              

                                <span className='primaryText'>{card.name}</span>                                
                                <div className="buttons">
                                  <a href={card.view}>
                                    <button className="button c-button" >View</button>
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

export default Certification;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
      <div className="r-buttons">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
  );
};