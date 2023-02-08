
import './Carousel.css';
import leftArrowImg from '@assets/ui/arrow_left.svg';
import rightArrowImg from '@assets/ui/arrow_right.svg';

import extractImageList from '@services/extractImageList.js';

import { useRef } from 'react';



const Carousel = ({ images }) => {

  /*------------------Scroll-Logic----------------------- */
  const scroll = (direction) => {
    const multiplier = direction === 'right' ? 1 : -1;
    const scrollDistance = carouselRef.current.offsetWidth * multiplier;
    carouselRef.current.scrollBy(
      {
        left: scrollDistance,
        behavior: 'smooth'
      }
    );
  }
  /*----------------------------------------------------- */

  const imageList = useRef([]);
  const carouselRef = useRef(null);

  imageList.current = extractImageList(images);
  


  return (
    <div className='pokemon-carousel-container'>
      <div ref={carouselRef} className='pokemon-carousel'>

        <button className='carousel-left-shift' onClick={() => { scroll('left'); }}>
          <img src={leftArrowImg} alt='left' />
        </button>

        <button className='carousel-right-shift' onClick={() => { scroll('right'); }}>
          <img src={rightArrowImg} alt='right' />
        </button>

        {
          imageList.current.map((imageSrc,index) => {
            return (
              <div key={index} className='img-container'>
                <img src={imageSrc} alt="pokemon-img" />
              </div>
            );
          })
        }


      </div>

    </div>
  )
}


export default Carousel;