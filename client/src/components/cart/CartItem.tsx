import React, { useState } from 'react';
import { ICartItem } from '../../interfaces/cart.interface';
import { Button, Number, Price } from '../../UI';
import styles from './CartItem.module.css';

const CartItem: React.FC<ICartItem> = ({ count, fullPrice, id, imageId, name, price }) => {
	const [productCount, setProductCount] = useState(count);
	return (
		<div className={styles['item']}>
			<img src={imageId} />
			<div className={styles['left-side']}>
				<p className={styles['name']}>{name}</p>
				<Button color='white' className={styles['remove-button']}>
					Remove
				</Button>
			</div>
			<div className={styles['right-side']}>
				<Price price={price} fullPrice={fullPrice} />
				<Number setValue={setProductCount} value={productCount} />
			</div>
		</div>
	);
};

export default CartItem;
