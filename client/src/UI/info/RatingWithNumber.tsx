import React from 'react';
import { Rating } from './Rating';
import styles from './RatingWithNumber.module.css';

interface IProp {
	rating: number;
}

const RatingWithNumber: React.FC<IProp> = ({ rating }) => {
	return (
		<div className={styles['rating']}>
			<Rating rating={rating} />
			{rating}
		</div>
	);
};

export { RatingWithNumber };
