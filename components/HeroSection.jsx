import React from 'react';
import styles from '@/styles/HeroSection.module.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['text-container']}>
          <h1 className={styles.title}>Enjoy Your Healthy Delicious Food</h1>
          <h3 className={styles.description}>We are team of talented developers making websites with NextJS</h3>
          <button className={styles['booking-button']}>Book a Table</button>
        </div>
        <div className={styles['image-container']}>
          <Image
            src='/images/hero-img.png'
            alt='hero image'
            width={500}
            height={500}
            className='animate-bounce'
          />
        </div>
      </div>
    </div>
  )
}
