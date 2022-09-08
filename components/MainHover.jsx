import React from 'react'
import Image from 'next/image'
function MainHover() {
  return (
    <div className='flex flex-col bg-blue-100 h-52 w-fit rounded-full p-2 text-center group hover:bg-blue-600 hover:text-white'>
    <Image
    src="/bald.jpg"
    layout="fixed"
    width={100}
    height={100}
    className="rounded-full group-hover:-rotate-12"
    />
    <p className='mt-7'>کچل</p>
</div>
  )
}

export default MainHover