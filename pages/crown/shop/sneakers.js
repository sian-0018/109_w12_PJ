
import Shop from '../../../components/shop/Products'
import Nav from '../../../components/layout/Nav'
import { useRouter } from 'next/router';

export async function getServerSideProps(){
  const response = await fetch('https://crownstrapi-demo.herokuapp.com/products');
  const categories = await response.json();

  return{
    props:{
      categories
    }
  }
}

export default function Home({categories}) {
  const router = useRouter();
  const filterCatId = router.query.cat_id;
  const cat_id = (router.query.cat_id === 'sneakers' ? 0 : 3);


  console.log('filterCatId',filterCatId);

  // console.log('cat_id',cat_id);
  const objDetail = categories.filter((obj) => obj.category.id === cat_id);

	return (
		<div >
            <Nav />
			<Shop key={objDetail[0].cid} categories={objDetail} category='Sneakers'/>
		</div>
	);
}
