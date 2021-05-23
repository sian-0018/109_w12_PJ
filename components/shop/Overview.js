import Link from 'next/link';
import styles from './shop.module.scss';
import Item from './OverviewItem';

export default function Nav({categories}) {
	return (
		<div>
			<h1 className={styles.products_header__1iU36}>SHOP Page</h1>

			<div className={styles.center}>
			{categories.map(({hats:[name,remote_url,id,size,cat_id,price]})=>(
                <Item key={id} name={name} remote_url={remote_url} size={size} cat_id={cat_id} price={price} />
            ))}
				
			</div>
		</div>
	);
}
