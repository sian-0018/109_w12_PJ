
import styles from './Project.module.scss';
import Item from './ProjectItem';

export default function Nav({ categories }) {
	// console.log('aaaa',categories);
	return (
		<div>
		<h1 className={styles.products_header__1iU36}>作品集</h1>
		<ul className={styles.cards}>
			{categories.map(({name, url, p, span}) => (
				<Item  name={name} url={url} p={p}  span={span} />
				// key={cid}
			))}
		</ul>
		</div>
	);
}
