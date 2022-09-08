import React from 'react'
import Image from 'next/image'
function BarberShopSelect() {
  return (
        <div>
        <div className='flex flex-col bg-blue-100 h-52 w-fit rounded-xl p-2 text-center group hover:bg-blue-600 hover:text-white'>
          <Image
            src="/barber-shop.jpg"
            layout="fixed"
            width={300}
            height={300}
            className="rounded-lg"
            />
          <p className='mt-7'>سلمونی رمضانی</p>
        </div>
    </div>
  )
}

export default BarberShopSelect