import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainHover from './MainHover';
import BarberShopSelect from './BarberShopSelect';
import 'swiper/css';
import { motion } from 'framer-motion';
function Section() {
  return (
    <div className="">
        <div>
        <motion.div className='w-fit bg-blue-500 cursor-pointer m-auto mb-20 rounded-2xl p-2'
        initial={{scale:1}}
        whileHover={{scale:1.2}}
        >
            <h1 className='text-white text-xl'>دنبال چه مدل مویی میگردی ؟ بهمون بگو تا توی پیدا کردنش بهت کمک کنیم</h1>
        </motion.div>
        <Swiper
          spaceBetween={1}
          slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='ml-12'><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
        </Swiper>
        </div>
        <div className='mt-32'>
        <motion.div className='w-fit bg-blue-500 cursor-pointer m-auto mb-20 rounded-2xl p-2'
        initial={{scale:1}}
        whileHover={{scale:1.2}}
        >
            <h1 className='text-white text-xl'>محبوب ترین آرایشگاه ها</h1>
        </motion.div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='mr-40'
        >
          <SwiperSlide className='ml-16'><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
        </Swiper>
        </div>
        <div>
            <h1 className='text-center text-2xl font-bold mt-20'>
                چرا پشمالوها؟
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='flex flex-col items-center'>
                    <Image src="/comb.png" width={70} height={70} layout="fixed"/>
                    <p className='font-bold mt-4'>!کاربردیه</p>
                    <p className='text-center w-56 mt-5'>میتونی با چندکلیک وقت آرایشگاه برای هر موقع که بخوای رزرو کنی</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src="/comb.png" width={70} height={70} layout="fixed"/>
                    <p className='font-bold mt-4'>!راحته</p>
                    <p className='text-center w-56 mt-5'>میتونی انتخاب کنی که آنلاین پرداخت کنی یا در محل</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src="/comb.png" width={70} height={70} layout="fixed"/>
                    <p className='font-bold mt-4'>قویه!</p>
                    <p className='text-center w-56 mt-5'>هر مسئله و سوالی داشتی,کافیه با پشتیبانی تماس بگیری</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src="/comb.png" width={70} height={70} layout="fixed"/>
                    <p className='font-bold mt-4'>سریعه!</p>
                    <p className='text-center w-56 mt-5'>میتونی در کمترین زمان ممکن وقت آرایشگاه بگیری</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section