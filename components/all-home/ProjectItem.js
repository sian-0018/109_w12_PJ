import React from 'react';
import Link from 'next/link';
import styles from './Project.module.scss';



function ProjectItem({name, url, p, span}) {
	// const linkUrl = `/crown/shop/${title}`;

	return (
   <li>
    <a href={url} className={styles.card}>
      <img src={span} className={styles.card__image} alt="" />
      <div className={styles.card__overlay}>
        <div className={styles.card__header}>
          <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>  
          <a href={url}><img className={styles.card__thumb} src="./images/go.png" alt="" /></a>                   
          
          <div className={styles['card__header-text']}>
            <h3 className={styles.card__title}>{name}</h3>            
            <span className={styles.card__status}>簡介</span>
          </div>
        </div>
        <p className={styles.card__description}>{p}</p>
      </div>
    </a>      
  </li>
	);
}

export default ProjectItem;