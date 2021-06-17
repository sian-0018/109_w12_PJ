import Layout from '../components/layout/Layout';
// import Project from '../components/all-home/Project';

export async function getServerSideProps(){
  // const response = await fetch('https://crownstrapi-demo.herokuapp.com/restaurants');
  // const categories = await response.json();

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
        {/* <Project categories={categories}/> */}
        <h1>我的作品集</h1>
      </Layout>
		</div>
	);
}
// key={categories[0].cid}