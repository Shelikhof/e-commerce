import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './store/hooks';
import { setDeviceWidth } from './store/slices/deviceWidth';
import './css/App.css';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const handleResize = () => {
		dispatch(setDeviceWidth(document.body.offsetWidth));
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	//header props
	const [searchValue, setSearchValue] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Category');
	const handleSearchButton = () => {
		alert('searching');
	};

	return (
		<BrowserRouter>
			<Header
				handleSearchButton={handleSearchButton}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div id='content'>
				<AppRouter />
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
