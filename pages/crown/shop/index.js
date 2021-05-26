
import Shop from '../../../components/shop/Shop'
import Nav from '../../../components/layout/Nav'

export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop');
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
