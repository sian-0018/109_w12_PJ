import Link from 'next/link';
import styles from './shop.module.scss';
import Item from './OverviewItem';

export default function Nav({categories}) {
	// const demo ;
	
	
// console.log(categories);
	return (
		<div>
			<h1 className={styles.products_header__1iU36}>SHOP Page</h1>

			<div className={styles.center}>



			<div>
			<div className={styles.property_card}>
				<a href="#">
					<div id={categories.cat_id} className={styles.property_image}>
						<div className={styles.property_image_title}>
							<img src={categories.remote_url} />
						</div>
					</div>
				</a>
				<div className={styles.property_description}>
					<h2> {categories.name} </h2>
					<p>${categories.price}</p>

					<button className={styles.custom_button}>GO TO CHECKOUT</button>
				</div>
				<a href="#">
					<div className={styles.property_social_icons} />
				</a>
			</div>
		</div>
				
			{/* {categories.item.map(({hats:[name,remote_url,id,size,cat_id,price]})=>(
                <Item key={id} name={name} remote_url={remote_url} size={size} cat_id={cat_id} price={price} />
            ))} */}
				
			</div>
		</div>
	);
}
