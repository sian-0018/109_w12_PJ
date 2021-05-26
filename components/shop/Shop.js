import Link from 'next/link';
import styles from './shop.module.scss';
import Item from './ShopItem';
import {useState} from 'react';
import ReactPaginate from 'react-paginate';


export default function Nav({products,category}) {

	const [pageNumber, setPageNumber]=useState(0);

	const itemsPerPage = 10;
	const pagesVisited = pageNumber * itemsPerPage;

	const displayProducts = products.slice(
		pagesVisited,pagesVisited + itemsPerPage
	);

	const changePage =({selected})=>{
		setPageNumber(selected);
	}

	const pageCount = Math.ceil(products.length / itemsPerPage);

	const title = category.toUpperCase();

	return (
		<div>
			<h1 className={styles.products_header__1iU36}>{title} Page</h1>

			<div className={styles.center}>
			{displayProducts.map(({name: title, remote_url:  imageUrl, cid, size,cat_id,price})=>(
                <Item key={cid} title={title} imageUrl={imageUrl} size={size} cat_id={cat_id} price={price} />
            ))}
			</div>

			<ReactPaginate
			previousLabel={'Prev'}
			nextLabel={'Next'}
			pageCount={pageCount}
			onPageChange={changePage}
			containerClassName={styles.paginationBttns}
			previousLinkClassName={styles.previousBttn}
			nextLinkClassName={styles.nextBttn}
			disabledClassName={styles.paginationDisabled}
			activeClassName={styles.paginationActive}/>
		</div>
	);
}
