import React from 'react';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles['item-container']}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.icon}
            />
            <div>
              <h1 className={styles.title}>Address</h1>
              <p className={styles['sub-text']}>A108 Adam Street</p>
              <p className={styles['sub-text']}>New York, NY 535022</p>
            </div>
          </div>
          <div className={styles['item-container']}>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className={styles.icon}
            />
            <div>
              <h1 className={styles.title}>Address</h1>
              <p className={styles['sub-text']}>A108 Adam Street</p>
              <p className={styles['sub-text']}>New York, NY 535022</p>
            </div>
          </div>
          <div className={styles['item-container']}>
            <FontAwesomeIcon
              icon={faClock}
              className={styles.icon}
            />
            <div>
              <h1 className={styles.title}>Address</h1>
              <p className={styles['sub-text']}>A108 Adam Street</p>
              <p className={styles['sub-text']}>New York, NY 535022</p>
            </div>
          </div>
          <div className={styles['follow-us']}>
            <h3 className={styles['follow-title']}>Follow Us</h3>
            <div className={styles['icon-container']}>
              <FontAwesomeIcon
                icon={faXTwitter}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['copyright-container']}>
        <p className={`${styles.copyright} mt-8`}>© Copyright Yummy | All Rights Reserved</p>
        <p className={styles.copyright}>Designed by <span className={styles.yummy}>Yummy</span></p>
      </div>
    </>
  )
}
