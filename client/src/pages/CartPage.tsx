import React from 'react';
import Cart from '../components/cart';
import CartList from '../components/cart/CartList';
import Container from '../components/Container';
import { CART } from '../variables';

const CartPage = () => {
	return (
		<Container>
			<Cart cartData={CART} />
		</Container>
	);
};

export { CartPage };
