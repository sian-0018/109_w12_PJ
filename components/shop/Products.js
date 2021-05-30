import Link from 'next/link';
import styles from './shop.module.scss';
import Item from './ShopItem';

export default function Nav({categories,category}) {
	const title = category.toUpperCase();
	return (
		<div>
			<h1 className={styles.products_header__1iU36}>{title} Page</h1>

			<div className={styles.center}>
			{categories.map(({name: title, remote_url:  imageUrl, cid, size,cat_id,price})=>(
                <Item key={cid} title={title} imageUrl={imageUrl} size={size} cat_id={cat_id} price={price} />
            ))}
				
			</div>
		</div>
	);
}
