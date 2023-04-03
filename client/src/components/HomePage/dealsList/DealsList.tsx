import React from 'react';
import DealItem from './DealItem';
import styles from './DealsList.module.css';

interface IProp {
	deales: {
		image: string;
		category: string;
		discount: number;
		id: string;
	}[];
}

const DealsList: React.FC<IProp> = ({ deales }) => {
	return (
		<div className={styles['deals-list']}>
			{deales.map((el, i) => (
				<DealItem deal={el} key={i} />
			))}
		</div>
	);
};

export default DealsList;
