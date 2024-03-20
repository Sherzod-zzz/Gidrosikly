import React from 'react'
import img_1 from "../../assets/image/img-1.png"
import img_2 from "../../assets/image/img-5.png"

const AddvertisementBanner = () => {
  return (
    <section className='mt-20'>
      <div className="container">
      <div className=' px-10 py-7 bg-primary flex items-center justify-center gap-12'>
      <div className='flex items-center justify-center '>
        <img src={img_1} alt="" />
        <img src={img_2} alt="" />
      </div>
      <h2 className='text-3xl max-w-[308px] text-white font-semibold'>CКИДКИ на все запчасти до 70%</h2>
      <button type='button' className='py-4 px-10 bg-white text-title-color text-2xl font-medium'>ПОСМОТЕТЬ ВСЕ</button>

      </div>
      </div>
    </section>
  )
}

export default AddvertisementBanner