import React, { useContext } from 'react';
import styles from '../styles/Navbar.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileToggleContext } from '@/context/MobileToggleContext';
import { menu } from '@/config';

export default function MobileSideBar() {
    const { toggle, setToggle } = useContext(MobileToggleContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className={styles['mobile-sidebar-container']}>
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
                                <a
                                    href={item.url}
                                    className={styles['mobile-item']}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
