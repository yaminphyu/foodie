import { testimonials } from '@/config';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import styles from '@/styles/Testimonial.module.css';
import TitleSection from './TitleSection';

export default function Testimonial() {
    const items = [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
    ];

    return (
        <section className='flex justify-center items-center w-full h-full px-5 md:px-10 xl:px-5 md:py-16 lg:py-28 box-border bg-gray-100'>
            <div className='w-full lg:w-[85vw] xl:w-[90vw] 3xl:w-[85vw] 4xl:w-[85vw] 5xl:w-[76vw] flex flex-col justify-center items-center h-full gap-7 md:gap-10 px-2 md:px-6 py-12 lg:p-0'>
                <TitleSection
                    subTitle='Testimonials'
                    firstTitle='What Are They'
                    secondTitle='Saying About Us'
                />
                <div
                    className='w-full md:w-[70vw] xl:w-[60vw] 5xl:w-[40vw]'
                >
                    <Carousel
                        showArrows={false}
                        enableAutoPlay
                        autoPlaySpeed={5000}
                    >
                        {testimonials.map(item =>
                            <div
                                key={item.id}
                                className='flex flex-col lg:flex-row justify-center items-center gap-5'
                            >
                                <div className='flex flex-row justify-center items-center gap-6 h-full'>
                                    <div className='w-4 h-full md:h-52 bg-yellow-500'></div>
                                    <div className='flex flex-col justify-center items-start gap-3 px-3'>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                className='text-yellow-500 text-3xl'
                                            />
                                            <p className='text-gray-700 text-base italic'>{item.description}</p>
                                            <FontAwesomeIcon
                                                icon={faQuoteRight}
                                                className='text-yellow-500 text-3xl'
                                            />
                                        </div>
                                        <div className='flex flex-col mt-3'>
                                            <p className='text-gray-950 text-sm uppercase font-dancing'>{item.name}</p>
                                            <p className='text-gray-500 text-xs uppercase font-dancing'>{item.title}</p>
                                        </div>
                                        <div className='flex flex-row gap-1 mt-3'>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className='text-yellow-500'
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className='text-yellow-500'
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className='text-yellow-500'
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className='text-yellow-500'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={400}
                                        className='rounded-full p-4'
                                    />
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
