import React from 'react';
import styles from './DealItem.module.css';

interface IProp {
	deal: {
		image: string;
		category: string;
		discount: number;
		id: string;
	};
}

const DealItem: React.FC<IProp> = ({ deal }) => {
	return (
		<div className={styles['deal-item']}>
			<img src={deal.image} alt={deal.category} loading='lazy' />
			<p className={styles['category']}>{deal.category}</p>
			<p className={styles['discount']}>-{deal.discount}%</p>
		</div>
	);
};

export default DealItem;
