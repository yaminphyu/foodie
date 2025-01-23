import React from 'react';
import styles from '@/styles/Navbar.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menu } from '@/config';
import Link from 'next/link';
import { handleSmoothScroll } from '@/common';

export default function MobileSideBar({ handleToggle, isAnimating, closeSidebar }) {
    return (
        <div className={`
            ${isAnimating ? 'animate-easeIn' : 'animate-easeOut'}
            ${styles['mobile-sidebar-container']}
        `}>
            <div className={styles['close-btn']}>
                <div
                    className={styles['mobile-toggle-action']}
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className={styles['mobile-menu']}>
                <ul className={styles['mobile-menu-list']}>
                    {
                        menu.map((item) => (
                            <li
                                key={item.id}
                            >
                                <Link
                                    href={`#${item.url}`}
                                    scroll={false}
                                    onClick={(e) => handleSmoothScroll(e, item.url, closeSidebar)}
                                    className={styles['mobile-item']}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
