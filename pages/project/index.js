import Layout from '../../components/layout/Layout';
import MenuContainer from '../../components/api/project'

export default function Home({categories}) {
	return (
		<div >
			<Layout>
        <MenuContainer />
      </Layout>
		</div>
	);
}
