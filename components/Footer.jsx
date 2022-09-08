import React from 'react'
import {FiAward} from "react-icons/fi"

function Footer() {
  return (
    <div className='grid grid-cols-1 md:flex p-10 bg-slate-200 mt-40 pl-28 justify-between'
    >
        <div className='flex items-center flex-col justify-center w-40'>
            <h1 className='text-xl font-bold'>مجوز ها</h1>
            <div className='flex w-40'>
                <FiAward className='text-7xl'/>  
                <FiAward className='text-7xl'/> 
            </div>
            <div className='flex w-40'>
                <FiAward className='text-7xl'/>  
                <FiAward className='text-7xl'/>  
            </div>
        </div>
        <div className='w-40 text-center mt-10'>
        <h1 className='text-xl font-bold'>بیشتر</h1>
        <p className='cursor-pointer mt-2'>نحوه ثبت نام</p>
        <p className='cursor-pointer mt-2'>شیوه های پرداخت</p>
        <p className='cursor-pointer mt-2'>قوانین و مقررات</p>
        <p className='cursor-pointer mt-2'>سوالات متداول</p>
        </div>
        <div className='w-40 text-center mt-10'>
        <h1 className='text-xl font-bold'>ارتباط با پشمالوها</h1>
        <p className='mt-2'>پیگیری نوبت:۰۹۱۳۱۳۱۱۳۱۳</p>
        <p className='mt-2'> ۰۳۴-۳۲۴۴۳۴۲۴:رسیدگی به شکایات و پیشنهادات</p>
        </div>
        <div className='w-40 text-center mt-10'>
            <h1 className='font-bold text-xl'>: درباره پشمالو ها</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت د، کتابهای زیادی در شصت و سه درصد </p>
        </div>
    </div>
  )
}

export default Footer