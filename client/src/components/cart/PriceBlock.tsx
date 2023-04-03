import React from 'react';
import { ICartPrice } from '../../interfaces/cart.interface';
import { Button } from '../../UI';
import styles from './PriceBlock.module.css';

const PriceBlock: React.FC<ICartPrice> = ({ subTotalPrice, totalPrice, discount = 0 }) => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['price']}>
				<p>
					<span>Subtotal:</span>
					<span>${subTotalPrice}</span>
				</p>
				<p>
					<span>Discount:</span>
					<span className={styles['discount']}>- ${discount}</span>
				</p>
			</div>
			<p className={styles['total-price']}>
				<span>Total:</span>
				<span className={styles['total-price-value']}>${totalPrice}</span>
			</p>
			<Button className={styles['checkout-button']} size='big'>
				Checkout
			</Button>
		</div>
	);
};

export default PriceBlock;
