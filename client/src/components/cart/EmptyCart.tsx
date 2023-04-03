import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI';
import styles from './EmptyCart.module.css';

const EmptyCart = () => {
	return (
		<div className={styles['wrapper']}>
			<p className={styles['first-row']}>Your cart is empty</p>
			<p className={styles['second-row']}>¯\_(ツ)_/¯</p>
			<Link to={'/'}>
				<Button>Go home page</Button>
			</Link>
		</div>
	);
};

export default EmptyCart;
