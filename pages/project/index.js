import Layout from '../../components/layout/Layout';
import Project from '../../components/api/Project';

export async function getServerSideProps(){
  const response = await fetch('https://crownstrapi-demo.herokuapp.com/restaurants');
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
        <Project key={categories[0].cid} categories={categories}/>
      </Layout>
		</div>
	);
}
// key={categories[0].cid}