import React from 'react';
import { faChevronRight, faFileArrowUp, faGem, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/WhyChooseMe.module.css';

export default function WhyChooseMe() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={`${styles['item-container']} ${styles['first-item']}`}>
                <h2 className={styles.title}>Why Choose Yummy</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                <button className={styles['learn-more']}>
                    Learn More
                    <FontAwesomeIcon
                        className={styles['arrow-icon']}
                        icon={faChevronRight}
                    />
                </button>
            </div>
            <div className={`group ${styles['item-container']} ${styles['other-items']}`}>
                <div className={`group-hover:bg-yellow-500 ${styles['other-icons-container']}`}>
                    <FontAwesomeIcon
                        icon={faFileArrowUp}
                        className={`group-hover:text-white ${styles['other-icons']}`}
                    />
                </div>
                <h3 className={styles['other-titles']}>Corporis voluptates officia eiusmod</h3>
                <p className={styles['other-descriptions']}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className={`group ${styles['item-container']} ${styles['other-items']}`}>
                <div className={`group-hover:bg-yellow-500 ${styles['other-icons-container']}`}>
                    <FontAwesomeIcon
                        icon={faGem}
                        className={`group-hover:text-white ${styles['other-icons']}`}
                    />
                </div>
                <h3 className={styles['other-titles']}>Ullamco laboris ladore lore pan</h3>
                <p className={styles['other-descriptions']}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className={`group ${styles['item-container']} ${styles['other-items']}`}>
                <div className={`group-hover:bg-yellow-500 ${styles['other-icons-container']}`}>
                    <FontAwesomeIcon
                        icon={faLaptopCode}
                        className={`group-hover:text-white ${styles['other-icons']}`}
                    />
                </div>
                <h3 className={styles['other-titles']}>Labore consequatur incidid dolore</h3>
                <p className={styles['other-descriptions']}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
        </div>
    </div>
  )
}