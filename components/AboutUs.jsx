import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='flex justify-center items-center w-full h-full px-5 md:px-10 xl:px-5 md:py-16 lg:py-10 box-border bg-white'>
      <div className='flex flex-col justify-center items-center w-full lg:w-[85vw] xl:w-[90vw] 3xl:w-[85vw] 4xl:w-[75vw] 5xl:w-[70vw] h-full gap-7 md:gap-10 px-6 py-12 lg:p-0'>
        <p className='uppercase text-sm'>About Us</p>
        <h1 className='text-3xl font-dancing uppercase'>Learn More <span className='text-yellow-500'>About Us</span></h1>
        <div className='flex flex-col lg:flex-row justify-between items-start w-full h-[75vh] gap-12 md:gap-20'>
          <div className='flex flex-col justify-start xl:justify-between items-start w-full lg:w-[55vw] h-full gap-5'>
            <Image
              src='/images/about.jpg'
              width={900}
              height={600}
              alt='about us'
            />
            <div className='border-2 md:border-4 border-gray-500 h-20 md:h-28 w-full gap-2 md:gap-4 flex flex-col justify-center items-center'>
              <h1 className='text-lg md:text-xl font-semibold'>Book a Table</h1>
              <h1 className='text-xl md:text-2xl font-semibold text-yellow-500'>+1 5589 55488 55</h1>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start w-full lg:w-[37vw] h-full gap-3 pb-20 lg:pb-0 box-border'>
            <p className='text-base text-gray-500 italic tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-row justify-start items-center gap-1'>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-yellow-500'
              />
              <span className='tracking-wider text-base font-medium'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-1'>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-yellow-500'
              />
              <span className='tracking-wider text-base font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-1'>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-yellow-500'
              />
              <span className='tracking-wider text-base font-medium'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-1'>
              <p className='tracking-wider text-base font-medium'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className='w-full h-full flex flex-row justify-center lg:justify-start items-center gap-5 mt-10 lg:mt-0'>
              <Image
                src='/images/about-2.jpg'
                width={550}
                height={300}
                alt='signature'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
