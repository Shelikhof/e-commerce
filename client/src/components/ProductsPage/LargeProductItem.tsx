import React from 'react';
import { IProduct } from '../../interfaces';
import { DotList, Price, Rating, RatingWithNumber } from '../../UI';
import FavoriteButton from '../../UI/buttons/FavoriteButton';
import styles from './LargeProductItem.module.css';

const LargeProductItem: React.FC<IProduct> = ({ description, image, name, orders, price, rating, fullPrice }) => {
	return (
		<div className={styles['product-item']}>
			<img src={image} alt={name} className={styles['image']} />
			<div className={styles['info']}>
				<p className={styles['name']}>{name}</p>
				<Price price={price} fullPrice={fullPrice} />
				<div className={styles['rating-orders']}>
					<DotList>
						<RatingWithNumber rating={rating} />
						<span className={styles['orders']}>{orders} orders</span>
					</DotList>
				</div>
				<p className={styles['description']}>{description}</p>
				<button className={styles['view-button']}>View details</button>
			</div>
			<div className={styles['favorite-button']}>
				<FavoriteButton handleClick={() => alert(12)} />
			</div>
		</div>
	);
};

export default LargeProductItem;
