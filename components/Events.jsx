import React from 'react';
import Image from 'next/image';
import { events } from '@/config'
import Carousel from 'react-elastic-carousel';

export default function Events() {
  return (
    <section
      id="events"
      className='flex justify-center items-center w-full h-full md:py-16 lg:py-28 box-border bg-white'
    >
      <div className='w-full flex flex-row justify-center items-center h-full py-12 lg:p-0 border-2 border-black'>
        <Carousel
          itemsToShow={3}
          showArrows={false}
          enableAutoPlay
          autoPlaySpeed={5000}
        >
          {events.map((event, index) => (
            <div key={index} className='flex flex-col w-full h-full'>
              <Image
                src={event.image}
                alt={event.name}
                width={900}
                height={900}
                className='object-contain bg-gray-700 bg-opacity-70 bg-blend-overlay'
              />
              <h3 className='text-2xl font-semibold'>{event.name}</h3>
              <p className='text-lg font-medium'>{event.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
