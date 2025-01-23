import React from 'react';
import { faChevronRight, faFileArrowUp, faGem, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/WhyChooseMe.module.css';

export default function WhyChooseMe() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={`${styles['main-container']} ${styles['first-container']}`}>
                <h1 className={styles.title}>Why Choose Yummy</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                <button className={styles['learn-more']}>
                    Learn More
                    <FontAwesomeIcon
                        icon={faChevronRight}
                    />
                </button>
            </div>
            <div className={`${styles['main-container']} ${styles['second-container']}`}>
                <div className={`group ${styles['item-containers']}`}>
                    <div className={`group-hover:bg-yellow-500 group-hover:text-white ${styles['other-icons-container']}`}>
                        <FontAwesomeIcon
                            icon={faFileArrowUp}
                        />
                    </div>
                    <h3 className={styles['other-titles']}>Corporis voluptates officia eiusmod</h3>
                    <p className={styles['other-descriptions']}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className={`group ${styles['item-containers']}`}>
                    <div className={`group-hover:bg-yellow-500 group-hover:text-white ${styles['other-icons-container']}`}>
                        <FontAwesomeIcon
                            icon={faGem}
                        />
                    </div>
                    <h3 className={styles['other-titles']}>Corporis voluptates officia eiusmod</h3>
                    <p className={styles['other-descriptions']}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className={`group ${styles['item-containers']}`}>
                    <div className={`group-hover:bg-yellow-500 group-hover:text-white ${styles['other-icons-container']}`}>
                        <FontAwesomeIcon
                            icon={faLaptopCode}
                        />
                    </div>
                    <h3 className={styles['other-titles']}>Corporis voluptates officia eiusmod</h3>
                    <p className={styles['other-descriptions']}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
            </div>
        </div>
    </div>
  )
}
