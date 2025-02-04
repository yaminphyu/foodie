import React, { useState } from 'react';
import TitleSection from './TitleSection';
import DatePicker from "react-datepicker";
import styles from '@/styles/BookMe.module.css';

export default function BookMe() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <section
            id='bookme'
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <TitleSection
                    subTitle='Book a Table'
                    firstTitle={'Book your'}
                    secondTitle={'Stay with us'}
                />
                <div className={styles['body-container']}>
                    <div className={styles['image-container']}>
                        <img
                            src='/images/reservation.jpg'
                            alt='booking'
                            className={styles.image}
                        />
                    </div>
                    <div className={styles['left-container']}>
                        <form className={styles.form}>
                            <div className={styles.box}>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    className={`${styles['simple-input']} ${styles['input-box']}`}
                                />
                                <input
                                    type="email"
                                    placeholder='Your Email'
                                    className={`${styles['simple-input']} ${styles['input-box']}`}
                                />
                            </div>
                            <div className={styles.box}>
                                <input
                                    type="text"
                                    placeholder='# of Guests'
                                    className={`${styles['simple-input']} ${styles['input-box']}`}
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
                                    className={`${styles['input-box']} focus:outline-none`}
                                />
                            </div>
                            <textarea
                                name=""
                                placeholder="Message"
                                id=""
                                cols="30"
                                rows="5"
                                className={styles['input-box']}
                            />
                            <button
                                type="submit"
                                className={styles['book-me']}
                            >Book a Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
