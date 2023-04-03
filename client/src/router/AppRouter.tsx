import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage, HomePage, NotFoundPage, ProductListPage, TestsPage } from '../pages';
import FavoritePage from '../pages/FavoritePage';
import ProductPage from '../pages/ProductPage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/product/' element={<ProductListPage />} />
			<Route path='/product/:id' element={<ProductPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/favorite' element={<FavoritePage />} />
			<Route path='/test' element={<TestsPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
