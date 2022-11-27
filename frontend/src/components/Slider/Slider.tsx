import { Swiper, SwiperSlide } from 'swiper/react';
import cn from "classnames"

import ItemCard from '../ItemCard/ItemCard';
import { SliderProps } from './Slider.props';
import { Pagination, Navigation } from "swiper";

import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from './Slider.module.scss'

const Slider = ({itemsArray}:SliderProps) => {
  return (
    <div className={styles.sliderBlock}>
      <Swiper 
        slidesPerView={3}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: '#next',
          prevEl: '#prev'
        }}
        breakpoints={{
          "1080":{
            slidesPerView: 3
          },
          "768":{
            slidesPerView: 2
          },
          "280":{
            slidesPerView: 1
          }
        }}
        loop={true}
        className={cn(styles.slider)}
      >
        {itemsArray.map((item,index) => 
          <SwiperSlide key={index} className={styles.slide}>
            <ItemCard id={item._id} inCart={item.inCart} colorless={item.colorless} imgLink={item.imageId} name={item.nameItem} price={item.cost}/>
          </SwiperSlide>
        )}
        <div className={cn("swiper-button-prev",styles.prev)} id='prev'>
          <img src="img/slider/prev.png" alt="prev"/>
        </div>
        <div className={cn("swiper-button-next",styles.next)} id='next'>
          <img src="img/slider/next.png" alt="next" />
        </div>
      </Swiper>
    </div>
  )
}

export default Slider