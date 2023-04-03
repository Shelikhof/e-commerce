import React from 'react';
import styles from './Price.module.css';

interface IProp {
	price: number;
	fullPrice?: number;
}

const Price: React.FC<IProp> = ({ price, fullPrice }) => {
	return (
		<p className={styles['price']}>
			{price}$ {fullPrice && <span>${fullPrice}</span>}
		</p>
	);
};

export { Price };
