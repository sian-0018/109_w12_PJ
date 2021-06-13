import React from 'react';
import Link from 'next/link';
import styles from './Project.module.scss';

function ProjectItem({title, imageUrl, address, business_hours,fb_url,phone,web_url,parking,traffic}) {
	// const linkUrl = `/crown/shop/${title}`;
	return (
    <div classNameName={styles.center}>
    <div className={styles['blog-card']}>
<div className={styles.meta}>
  <div className={styles['photo']}>
  <img src={imageUrl}/>
</div>
  <ul className={styles.details}>
    <li className={styles.author}><a href="#">{title}</a></li>
    <br/>
    <li className={styles.date}>Aug. 24, 2015</li>
    <li className={styles.date}>{phone}</li>
    <li className={styles.tags}>
      <ul>
        <li><a href={fb_url}>fb</a></li>
      <li><a href={web_url}>web</a></li>
      </ul>
    </li>
  </ul>
</div>
<div className={styles.description}>
  <h1>{title}</h1>
  <h2>{address}</h2>
    <p>{business_hours}</p>
    <p>{parking}</p>
    <p>{traffic}</p>
  <p className={styles['read-more']}>
  <a href={fb_url}><img src="./images/fb_icon.svg"/></a>
  <a href={web_url}><img src="./images/link_icon.svg"/></a>
  </p>
</div>
</div>

</div>
	);
}

export default ProjectItem;