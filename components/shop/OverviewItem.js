import Link from 'next/link';
import styles from './shop.module.scss';
import React from 'react';

export default function Nav({ name, remote_url, id, size, cat_id, price }) {
	return (
		<div>
			<div className={styles.property_card}>
				<a href="#">
					<div id={cat_id} className={styles.property_image}>
						<div className={styles.property_image_title}>
							<img src={remote_url} />
						</div>
					</div>
				</a>
				<div className={styles.property_description}>
					<h2> {name} </h2>
					<p>${price}</p>

					<button className={styles.custom_button}>GO TO CHECKOUT</button>
				</div>
				<a href="#">
					<div className={styles.property_social_icons} />
				</a>
			</div>
		</div>
	);
}
