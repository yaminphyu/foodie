import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/ScrollUpArrow.module.css';

export default function ScrollUpArrow() {
    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div
            className={styles.container}
            onClick={handleScrollUp}
        >
            <FontAwesomeIcon
                icon={faArrowUp}
                className={styles.arrow}
            />
        </div>
    )
}
