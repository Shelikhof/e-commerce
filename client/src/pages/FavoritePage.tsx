import React from 'react';
import Container from '../components/Container';
import FavoritePageComponent from '../components/FavoritePageComponent';
import { FAVORITES } from '../variables';

const FavoritePage = () => {
	return (
		<Container>
			<FavoritePageComponent favoriteList={FAVORITES} />
		</Container>
	);
};

export default FavoritePage;
