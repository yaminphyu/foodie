import React from 'react';
import Carousel from 'react-elastic-carousel';
import TitleSection from './TitleSection';
import { galleries } from '@/config';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';

export default function Gallery() {
  return (
    <section
        id='gallery'
        className={styles.container}
    >
        <div className={styles.wrapper}>
            <TitleSection
                subTitle='Gallery'
                firstTitle='Check'
                secondTitle='Our Gallery'
            />
            <div className='flex flex-1 justify-center items-center w-full'>
                <Carousel
                    showArrows={false}
                    enableAutoPlay
                    autoPlaySpeed={4000}
                >
                    {
                        galleries.map((gallery, index) => (
                            <div key={index} className={styles['image-container']}>
                                <Image
                                    src={gallery.image}
                                    alt={gallery.name}
                                    width={900}
                                    height={900}
                                    className={styles.gallery}
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    </section>
  )
}
