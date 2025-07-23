import Image from 'next/image'
import React from 'react'

function Newsletter() {
  return (
    <div className=' bg-blue-200 '>
        <div className='w-[90%] mx-auto flex items-center gap-20'>
            <Image src={"/images/ball.png"} alt='newsletter' width={400} height={400} className='w-175 pt-10 lg:block hidden' />
            <div className='lg:p-0 py-20'>
                <h1 className='md:text-6xl sm:text-4xl text-3xl font-semibold'>Shake up your inbox</h1>
                <p className='pt-8 md:pb-15 pb-10 sm:text-2xl text-xl'>Your Bitcoin. Your Future. Your Inbox.</p>
                <div className='flex gap-2'>
                    <input type='email' placeholder='Your email here...' className='rounded-lg py-5 px-7 w-[70%] outline-0  bg-white' />
                    <button className='py-2 px-3 w-[30%] text-xl font-semibold text-white bg-black rounded-lg cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter