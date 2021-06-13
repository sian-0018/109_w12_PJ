import React from 'react';
import Link from 'next/link';
import styles from './Project.module.scss';

function ProjectItem({ title, imageUrl, size }) {
	const linkUrl = `/crown/shop/${title}`;
	return (
        <div className={styles.card}>
        <div className={styles['card__image-holder']}>
          <img className={styles.card__image} src="https://source.unsplash.com/300x225/?wave" alt="wave" />
        </div>
        <div className={styles.card-title}>
          <a href="#" className={styles['toggle-info btn']}>
            <span className={styles.left}></span>
            <span className={styles.right}></span>
          </a>
          <h2>
              Card title
              <small>Image from unsplash.com</small>
          </h2>
        </div>
        <div className={styles['card-flap flap1']}>
          <div className={styles.card-description}>
            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
          </div>
          <div className={styles['card-flap flap2']}>
            <div className={styles['card-actions']}>
              <a href="#" className={styles.btn}>Read more</a>
            </div>
          </div>
        </div>
      </div>
    
	);
}

export default ProjectItem;