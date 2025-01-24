import React, { useEffect, useState } from 'react';
import { foodMenu } from '@/config';
import Image from 'next/image';
import styles from '@/styles/Menu.module.css';
import TitleSection from './TitleSection';

export default function Menu() {
    const [activeTab, setActiveTab] = useState({
        id: "starters",
        name: "Starters",
    });
    const [mainMenu, setMainMenu] = useState([]);

    const tabs = [
        { id: "starters", label: "Starters" },
        { id: "breakfast", label: "Breakfast" },
        { id: "lunch", label: "Lunch" },
        { id: "dinner", label: "Dinner" },
    ];

    useEffect(() => {
        setMainMenu(foodMenu[activeTab.id || "starters"]);
    }, [activeTab]);

    return (
        <section
            id="menu"
            className={styles.container}
        >
            <div className={`${styles.wrapper} ${styles['main-part']}`}>
                <TitleSection
                    subTitle='Our Menu'
                    firstTitle='Check our'
                    secondTitle='Yummy Menu'
                />
                <div className={styles['tab-container']}>
                    <div className={styles['tabs']}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab({
                                    id: tab.id,
                                    name: tab.label,
                                })}
                                className={`
                                    ${styles['tab-item']}
                                    ${activeTab.id === tab.id ? styles.active : styles.inactive}
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className={`${styles['menu-container']} ${styles['main-part']}`}>
                        <TitleSection
                            subTitle='Menu'
                            secondTitle={activeTab.name}
                        />
                        <div className={styles['menu-wrapper']}>
                            {mainMenu?.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.menu}
                                >
                                    <Image
                                        src={item?.image}
                                        alt={item?.name}
                                        width={400}
                                        height={400}
                                        className={styles['menu-image']}
                                    />
                                    <div className={styles.description}>
                                        <h1>{item?.name}</h1>
                                        <p>{item?.description}</p>
                                        <p>${item?.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
