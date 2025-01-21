import React, { useContext } from 'react';
import styles from '@/styles/Navbar.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileToggleContext } from '@/context/MobileToggleContext';
import { menu } from '@/config';

export default function MobileSideBar() {
    const { toggle, setToggle } = useContext(MobileToggleContext);

    const handleToggle = () => {
        const scrollPosition = parseInt(document.body.style.top, 10) * -1;

        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        // Scroll back to the original position
        window.scrollTo(0, scrollPosition);

        // Dispatch the action to open the sidebar
        setToggle(!toggle);
    };

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
