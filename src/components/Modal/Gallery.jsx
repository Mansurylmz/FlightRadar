import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Gallery = ({data}) => {
    const arr=data?.large ? data.large : data?.medium ? data.medium : data?.thumbnails
  return (
    <div className='slider'>
        {arr?.length >0 ? 
            <Splide options={{pagination:false}} aria-label="My Favorite Images">
            {arr.map((item)=>(<SplideSlide>
              <img src={item.src} alt="Image 2"/>
            </SplideSlide>))}
            
          </Splide>
        : <div className='warning'> <p>Fotoğraf İçeriği Bulunmuyor</p></div> }
    </div>
  )
}

export default Gallery