import "./Experience.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css";
import data from '../../utils/experience.json';



const Experience = () => {

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 60, 
    
    breakpoints: {
      480: {
          slidesPerView: 1
      },
      600: {
          slidesPerView: 2
      },
      750: {
          slidesPerView: 3
      },
      1100: {
        slidesPerView: 3
    }
      
  }
  };  
  const isMobile = window.innerWidth <= 480
  return (
    <div className=".p-wrapper" id="Experience" >
      {/* heading */}
      <div className="p-center">
        <span className="heading">My</span>
        <span className="primaryText">Experience</span>
      </div>   

          <Swiper {...sliderSettings}>
            { isMobile && <SliderButtons /> } 
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />                         
                                                          

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText source'>{card.source}</span>
                                <span className='secondaryText'>{card.view}</span>            
                                
                                
                            </div>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
    </div>
  );
};

export default Experience;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
      <div className="r-buttons">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
  );
};

