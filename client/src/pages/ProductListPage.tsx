import React from 'react';
import Container from '../components/Container';
import Filter from '../components/ProductsPage/filter/Filter';
import ProductList from '../components/ProductsPage/ProductList';
import { IProduct } from '../interfaces';
import { useAppSelector } from '../store/hooks';
import { PRODUCTS } from '../variables';

const ProductListPage = () => {
	const { deviceWidth } = useAppSelector((state) => state.deviceWidth);
	return (
		<Container>
			<div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', gap: '20px' }}>
				{deviceWidth > 900 && <Filter />}
				<ProductList products={PRODUCTS} />
			</div>
		</Container>
	);
};

export { ProductListPage };
