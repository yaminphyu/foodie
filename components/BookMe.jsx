import React, { useState } from 'react';
import TitleSection from './TitleSection';
import Image from 'next/image';
import DatePicker from "react-datepicker";

export default function BookMe() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <section
            id='bookme'
            className='flex justify-center items-center w-full h-full px-5 md:px-10 xl:px-5 md:py-16 lg:py-28 box-border bg-white'
        >
            <div className='flex flex-col justify-center items-center w-full md:w-[80vw] lg:w-[85vw] xl:w-[90vw] 3xl:w-[85vw] 4xl:w-[85vw] 5xl:w-[76vw] h-full gap-7 md:gap-10 px-2 md:px-6 py-12 lg:p-0 lg:h-[73vh]'>
                <TitleSection
                    subTitle='Book a Table'
                    firstTitle={'Book your'}
                    secondTitle={'Stay with us'}
                />
                <div className='flex flex-col lg:flex-row justify-start items-start w-full h-full'>
                    <div className='w-full lg:w-[40vw] xl:w-[30vw]'>
                        <img
                            src='/images/reservation.jpg'
                            alt='booking'
                            className='w-full h-full lg:h-[55vh]'
                        />
                    </div>
                    <div className='flex flex-col items-start p-5 w-full lg:w-[50vw] xl:w-[60vw]'>
                        <form className='flex flex-col items-start w-full'>
                            <div className='flex flex-col xl:flex-row xl:gap-14 w-full'>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    className='mb-5 border-[1px] border-gray-400 px-4 py-2 md:py-3 w-full xl:w-1/2'
                                />
                                <input
                                    type="email"
                                    placeholder='Your Email'
                                    className='mb-5 border-[1px] border-gray-400 px-4 py-2 md:py-3 w-full xl:w-1/2'
                                />
                            </div>
                            <div className='flex flex-col xl:flex-row xl:gap-14 w-full'>
                                <input
                                    type="text"
                                    placeholder='# of Guests'
                                    className='mb-5 border-[1px] border-gray-400 px-4 py-2 md:py-3 w-full xl:w-1/2'
                                    onKeyPress={(e) => {
                                        if (!/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                                <DatePicker
                                    placeholderText='Select Date and Time'
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    showTimeSelect
                                    className='mb-5 border-[1px] border-gray-400 px-4 py-2 md:py-3 w-full focus:outline-none'
                                />
                            </div>
                            <textarea
                                name=""
                                placeholder="Message"
                                id=""
                                cols="30"
                                rows="5"
                                className='mb-5 border-[1px] border-gray-400 px-4 py-2 md:py-3 w-full'
                            />
                            <button
                                type="submit"
                                className='bg-yellow-500 text-white px-4 py-2 md:py-3 w-full'
                            >Book a Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
