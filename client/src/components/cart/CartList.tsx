import React from 'react';
import { Link } from 'react-router-dom';
import { ICartItem } from '../../interfaces/cart.interface';
import { Button } from '../../UI';
import CartItem from './CartItem';
import styles from './CartList.module.css';

interface IProp {
	cartProducts: ICartItem[];
}

const CartList: React.FC<IProp> = ({ cartProducts }) => {
	return (
		<div className={styles['list']}>
			{cartProducts.map((el, i) => (
				<CartItem {...el} key={i} />
			))}
			<div className={styles['list-footer']}>
				<Link to={'/'}>
					<Button>Back to shop</Button>
				</Link>
				<Button color='white'>Remove all</Button>
			</div>
		</div>
	);
};

export default CartList;
