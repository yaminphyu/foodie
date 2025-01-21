import React from 'react';
import Image from 'next/image';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>About Us</p>
        <h1 className={styles['main-title']}>Learn More <span className='text-yellow-500'>About Us</span></h1>
        <div className={styles['booking-container']}>
          <div className={styles['booking-img-container']}>
            <Image
              src='/images/about.jpg'
              width={900}
              height={600}
              alt='about us'
            />
            <div className={styles['booking-phone-container']}>
              <h1 className={styles.booking}>Book a Table</h1>
              <h1 className={styles.phone}>+1 5589 55488 55</h1>
            </div>
          </div>
          <div className={styles['text-container']}>
            <p className={styles['first-string']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles['string-container']}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={styles.check}
              />
              <span className={styles.string}>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            <div className={styles['string-container']}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={styles.check}
              />
              <span className={styles.string}>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </div>
            <div className={styles['string-container']}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={styles.check}
              />
              <span className={styles.string}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
            </div>
            <div className={styles['string-container']}>
              <p className={styles.string}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className={styles['signature-container']}>
              <Image
                src='/images/about-2.jpg'
                width={550}
                height={300}
                alt='signature'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
