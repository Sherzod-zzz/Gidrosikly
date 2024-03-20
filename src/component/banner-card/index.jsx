import React from 'react';
import add_img from '../../assets/image/add-img.png';

const BannerCard = () => {
  return (
    <div className="w-[365px] h-full border-[2px] border-gray rounded-[3px] relative flex items-center justify-center flex-col overflow-hidden">
      <div className="absolute top-0 left-0 bg-primary py-2 px-5 uppercase text-white font-xs font-medium">
        акция
      </div>

      <span className="absolute top-0 right-0 text-xl text-primary font-bold">
        190 000 ₽
      </span>
      <span className="absolute top-11 right-0 text-blue-gray-100 line-through">
        225 000 ₽
      </span>

      <img
        src={add_img}
        alt=""
        className=""
      />
      <h2 className='text-lg text-title-color font-bold text-center'>Лодочный мотор Suzuki DF9.9BRS</h2>

      <div className='bg-gray px-4 py-3 absolute bottom-0 w-full'>
        <h3 className='text-title-color font-lg font-normal text-center'> Акция действует до</h3>
        <p className='text-primary text-center font-bold'>
        31.08.2020
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
