
import Shop from '../../../components/shop/Overview'
import Nav from '../../../components/layout/Nav'

export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/overview');
  const categories = await response.json();

Object.entries(categories).forEach(item => 
	console.log(`${item}`));

  return{ 
    props:{
      categories
    }
  }
}

export default function Home(categories) {
  
	return (
		<div >
    
            <Nav />
			<Shop categories={categories}/>
		</div>
	);
}
