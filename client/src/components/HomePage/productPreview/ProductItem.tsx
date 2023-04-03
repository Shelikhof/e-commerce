import React from 'react';
import styles from './ProductItem.module.css';

interface IProp {
	name: string;
	cost: number;
	image: string;
	id: string;
}

const ProductItem: React.FC<IProp> = ({ cost, id, image, name }) => {
	return (
		<div className={styles['product-item']}>
			<div className={styles['info']}>
				<p className={styles['name']}>{name}</p>
				<p className={styles['cost']}>From USD {cost}</p>
			</div>
			<img className={styles['image']} src={image} alt={name} loading='lazy' />
		</div>
	);
};

export default ProductItem;
