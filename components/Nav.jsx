import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import Loader from './Loader'
const heroVariants ={
  hidden:{
    x:"-1000vh"
  },
  visible:{
    x:0,
    transition:{
      type:"spring",
    damping:15,
    delay:0.7
    }
  }
}

function Nav() {
  return (
    <motion.div variants={heroVariants} initial="hidden" animate="visible"
    className='bg-blue-900 m-10 rounded-xl h-[600px] md:h-[450px] '
    >
    <div className='pt-1'>
      <Loader/>
    </div>
     <h1 className='text-white text-center text-2xl pt-32'>
      رزرو وقت آرایشگاه مورد علاقه تان با ما کوتاه کردن با شما 
     </h1>
     <div className='md:flex-row flex-col justify-center md:gap-4'>
     <div className='w-fit h-fit m-auto'>
     <motion.input type="text" initial={{scale:1}} whileHover={{scale:1.1  }} className='text-right mt-10 rounded-xl h-10 p-2 outline-none border-4 border-blue-500'  placeholder='نام شهر'/>
     </div>
     <div className='w-fit h-fit m-auto'>
      <motion.button initial={{scale:1}} whileHover={{scale:1.2}} className='rounded-xl text-white bg-blue-500 h-10 mt-10 w-20 pb-2'>بزن بریم</motion.button>
     </div>
     </div>
     <div className="flex">
     <p className='text-center text-white mt-0'>برای استفاده از آدرس های ثبت شده خود <a href='#' className='text-cyan-600 underline'>وارد شوید</a></p>
     </div>
    </motion.div>
  )
}

export default Nav