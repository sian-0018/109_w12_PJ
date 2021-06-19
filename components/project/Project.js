import Link from 'next/link';
import styles from './Project.module.scss';
import Item from './ProjectItem';
import {useState} from 'react';
import ReactPaginate from 'react-paginate';


export default function Nav({categories}) {
	
	const [pageNumber, setPageNumber]=useState(0);

	const itemsPerPage = 10;
	const pagesVisited = pageNumber * itemsPerPage;

	const displayProducts = categories.slice(
		pagesVisited,pagesVisited + itemsPerPage
	);

	const changePage =({selected})=>{
		setPageNumber(selected);
	}

	const pageCount = Math.ceil(categories.length / itemsPerPage);

	
	// const title = category.toUpperCase();
	return (
		<div>
			<h1 className={styles.products_header__1iU36}>基隆旅遊景點</h1>
			{displayProducts.map(({cid,title, cover_image:  imageUrl, address, business_hours,fb_url,phone,web_url,traffic_guideline:traffic,parking_information:parking})=>(
                <Item  title={title} imageUrl={imageUrl} address={address} business_hours={business_hours} fb_url={fb_url} phone={phone} web_url={web_url} traffic={traffic} parking={parking} />
				// key={cid}
            ))}
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
		// </div>
	);

	// key={cid}
}


