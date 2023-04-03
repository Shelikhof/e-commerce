import Container from '../components/Container';
import NavBar from '../components/header/NavBar/NavBar';
import HomePageComponent from '../components/HomePage/HomePageComponent';

const HomePage = () => {
	return (
		<>
			<NavBar />
			<Container>
				<HomePageComponent />
			</Container>
		</>
	);
};

export { HomePage };
