import Link from 'next/link';
import styles from './Project.module.scss';
import Item from './ProjectItem';

export default function Nav({categories,category}) {
	const title = category.toUpperCase();
	return (
		<div>
			<h1 className={styles.products_header__1iU36}>{title} Page</h1>
			<div className={styles.center}>
			{categories.map(({title, cover_image:  imageUrl, address, business_hours,fb_url,phone,web_url})=>(
                <Item key={cid} title={title} imageUrl={imageUrl} address={address} business_hours={business_hours} fb_url={fb_url} phone={phone} web_url={web_url} />
            ))}
			</div>
		</div>
	);
}
