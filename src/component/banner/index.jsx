import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { carouselData } from '../../constant';
import BannerCard from '../banner-card';

const Banner = () => {
  

  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex items-center gap-x-9 h-[400px]">
          <div className="w-full h-full">
            <Carousel className="rounded-xl">
              {carouselData.map((el, i) => (
                <img
                  src={el.image}
                  key={i}
                  alt="carousel-img"
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
         <BannerCard/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
