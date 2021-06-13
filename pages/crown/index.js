import Layout from '../../components/layout/Layout';
import MenuContainer from '../../components/home/MenuContainer';

export async function getServerSideProps(){
  const response = await fetch('https://crownstrapi-demo.herokuapp.com/categories');
  const categories = await response.json();

  return{
    props:{
      categories
    }
  }
}

export default function Home({categories}) {
	return (
		<div >
			<Layout>
        <MenuContainer key={categories[0].cid} categories={categories}/>
      </Layout>
		</div>
	);
}
