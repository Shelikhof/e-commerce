import React from 'react';
import { ICart } from '../../interfaces/cart.interface';
import { CART } from '../../variables';
import CartList from './CartList';
import PriceBlock from './PriceBlock';
import styles from './index.module.css';
import EmptyCart from './EmptyCart';

interface IProp {
	cartData?: ICart;
}

const index: React.FC<IProp> = ({ cartData }) => {
	if (!cartData) {
		return <EmptyCart />;
	}
	return (
		<div className={styles['wrapper']}>
			<p className={styles['title']}>Cart ({cartData.length})</p>
			<div className={styles['content']}>
				<CartList cartProducts={cartData.cartItems} />
				<PriceBlock subTotalPrice={cartData.price.subTotalPrice} totalPrice={cartData.price.totalPrice} discount={cartData.price.discount} />
			</div>
		</div>
	);
};

export default index;
