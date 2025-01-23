import React, { useEffect, useState } from 'react';
import { targets } from '@/config';
import styles from '@/styles/Stats.module.css';

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
      clients: 0,
      projects: 0,
      hours: 0,
      workers: 0,
    });

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );

      const section = document.getElementById('stats');
      if (section) {
        observer.observe(section);
      }

      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    }, []);

    useEffect (() => {
      if (isVisible) {
        const duration = 2000; // Animation duration in ms
        const startTime = performance.now();

        const animateCounts = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1); // Ensure progress does not exceed 1

          setCounts({
            clients: Math.floor(progress * targets.clients),
            projects: Math.floor(progress * targets.projects),
            hours: Math.floor(progress * targets.hours),
            workers: Math.floor(progress * targets.workers),
          });

          if (progress < 1) {
            requestAnimationFrame(animateCounts);
          }
        };

        requestAnimationFrame(animateCounts);
      }
    }, [isVisible]);

    return (
        <section
            id="stats"
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h2 className={styles.count}>{counts.clients}</h2>
                    <h4 className={styles.title}>Clients</h4>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.count}>{counts.projects}</h2>
                    <h4 className={styles.title}>Projects</h4>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.count}>{counts.hours}</h2>
                    <h4 className={styles.title}>Hours</h4>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.count}>{counts.workers}</h2>
                    <h4 className={styles.title}>Workers</h4>
                </div>
            </div>
        </section>
    )
}
