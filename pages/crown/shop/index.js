
import Shop from '../../../components/shop/Shop'
import Nav from '../../../components/layout/Nav'

export async function getServerSideProps(){
  const response = await fetch('https://crownstrapi-demo.herokuapp.com/products');
  const products = await response.json();

  return{
    props:{
      products
    }
  }
}

export default function Home({products}) {
	return (
		<div >
            <Nav />
			<Shop key={products[0].cid} products={products} category='SHOP'/>
		</div>
	);
}
