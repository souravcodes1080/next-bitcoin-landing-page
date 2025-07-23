import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div>
        <div className=' md:h-[93vh] h-[100vh] bg-[url("/images/hero.png")] sm:bg-contain  sm:bg-no-repeat sm:bg-[top_160px_center] bg-contain bg-no-repeat bg-[right_100px_top_200px] flex items-center md:justify-end md:pb-25 flex-col justify-center bg-gray-100' >
           <Image src={"/images/title.svg"} alt='title' width={700} height={700} className='w-[80%] md:block  hidden' />
           <Image src={"/images/title-mobile.svg"} alt='title' width={700} height={700} className='w-[90%] md:hidden  block' />
           <p className='md:text-4xl mt-6 text-center text-xl'>Bring everyday finance to your Bitcoin.</p>
           <button className='sm:px-9 sm:py-4 px-5 py-3 mt-8 bg-black rounded-xl text-white text-xl font-semibold cursor-pointer hover:bg-pink-700 transition-all duration-200 '>Explore Mezo</button>
        </div>
    </div>
  )
}

export default Hero