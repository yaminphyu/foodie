import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { menu } from "@/config";
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MobileToggleContext } from '@/context/MobileToggleContext';

export default function Navbar() {
    const website_name = process.env.NEXT_PUBLIC_WEBSITE_NAME;
    const router = useRouter();
    const { toggle, setToggle } = useContext(MobileToggleContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{website_name}</h1>
                    <div className={styles['yellow-dot']}></div>
                </div>
                <div className={styles['item-container']}>
                    <ul>
                        {
                        menu.map((item) => (
                            <li
                                className={styles.item}
                                key={item.id}
                            >
                                <a
                                    href={item.url}
                                    className={`
                                        ${ styles['item-text'] }
                                        ${ router.pathname == item.url ? styles.active : styles.hover }
                                    `}
                                >{item.title}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className={`${toggle ? 'hidden' : 'block'} flex justify-center items-center gap-3`}>
                    <button
                        className={styles.booking}
                        onClick={() => console.log("Book a Table")}
                    >Book a Table</button>
                    <div
                        className={styles['mobile-toggle']}
                        onClick={handleToggle}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
