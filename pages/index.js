import Layout from '../components/layout/Layout';
import Project from '../components/all-home/Project';

export async function getServerSideProps(){
  const response = await fetch('https://crownstrapi-demo.herokuapp.com/projects');
  const categories = await response.json();

  return{
    props:{
      categories
    }
  }
}

export default function Home({categories}) {
  // console.log("iwefniewnvioewvne",categories);
	return (
		<div >
			<Layout>
        <Project key={categories[0].id} categories={categories}/>
      </Layout>
		</div>
	);
}
// key={categories[0].cid}