import { testimonials } from '@/config';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import styles from '@/styles/Testimonial.module.css';
import TitleSection from './TitleSection';

export default function Testimonial() {

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <TitleSection
                    subTitle='Testimonials'
                    firstTitle='What Are They'
                    secondTitle='Saying About Us'
                />
                <div
                    className={styles.carousel}
                >
                    <Carousel
                        showArrows={false}
                        enableAutoPlay
                        autoPlaySpeed={5000}
                    >
                        {testimonials.map(item =>
                            <div
                                key={item.id}
                                className={styles['carousel-item']}
                            >
                                <div className={styles['carousel-container']}>
                                    <div className={styles.line}></div>
                                    <div className={styles.information}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                className={styles.quote}
                                            />
                                            <p className='text-gray-700 text-base italic'>{item.description}</p>
                                            <FontAwesomeIcon
                                                icon={faQuoteRight}
                                                className={styles.quote}
                                            />
                                        </div>
                                        <div className={styles['text-container']}>
                                            <p>{item.name}</p>
                                            <p>{item.title}</p>
                                        </div>
                                        <div className={styles['star-container']}>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={styles.star}
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={styles.star}
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={styles.star}
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className={styles.star}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={600}
                                        height={600}
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
