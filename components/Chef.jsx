import React from 'react';
import Image from 'next/image';
import TitleSection from './TitleSection';
import { chefs } from '@/config';
import styles from '@/styles/Chef.module.css';

export default function Chef() {
  return (
    <section
        id="chefs"
        className={styles.container}
    >
        <div className={styles.wrapper}>
            <TitleSection
                subTitle='Chefs'
                firstTitle='Our'
                secondTitle='Proffesional Chefs'
            />
            <div className={styles['chef-container']}>
                {
                    chefs.map((chef) => (
                        <div
                            key={chef.id}
                            className={styles.item}
                        >
                            <Image
                                src={chef.image}
                                alt={chef.name}
                                width={500}
                                height={500}
                                className={styles['chef-photo']}
                            />
                            <div className={styles.description}>
                                <h1>
                                    {chef.name}
                                </h1>
                                <span>{chef.speciality}</span>
                                <p>
                                    {chef.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
