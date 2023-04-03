import React from 'react';
import { IProduct } from '../../interfaces';
import { Price, Rating, RatingWithNumber } from '../../UI';
import FavoriteButton from '../../UI/buttons/FavoriteButton';
import truncateString from '../../utils/truncateString';
import styles from './SmallProductItem.module.css';

const SmallProductItem: React.FC<IProduct> = ({ description, image, name, orders, price, rating, fullPrice }) => {
	return (
		<div className={styles['product-item']}>
			<img src={image} alt={name} className={styles['image']} />
			<div className={styles['info']}>
				<Price price={price} fullPrice={fullPrice} />
				<div style={{ marginBottom: '10px' }}>
					<RatingWithNumber rating={rating} />
				</div>
				<p className={styles['name']}>{truncateString(name, 55)}</p>
				<div className={styles['favorite-button']}>
					<FavoriteButton handleClick={() => alert(12)} />
				</div>
			</div>
		</div>
	);
};

export default SmallProductItem;
