import React from 'react';
import { Button, DotList, Price, Rating, RatingWithNumber } from '../../UI';
import FavoriteButton from '../../UI/buttons/FavoriteButton';
import styles from './InfoBlock.module.css';

interface IProp {
	id: string;
	name: string;
	rating: number;
	soldCount: number;
	count: number;
	guarantee?: number;
	price: number;
	fullPrice?: number;
	brand: {
		name: string;
		id: string;
	};
}

const InfoBlock: React.FC<IProp> = ({ brand, count, id, name, price, rating, soldCount, fullPrice, guarantee }) => {
	return (
		<div className={styles['info']}>
			<p className={styles['name']}>{name}</p>
			<p className={styles['brand']}>{brand.name}</p>
			<div className={styles['dot-list']}>
				<DotList>
					<RatingWithNumber rating={rating} />
					<span>{soldCount} sold</span>
					<span>{count} remain</span>
				</DotList>
			</div>
			<div className={styles['price-block']}>
				<div className={styles['price']}>
					<Price price={price} fullPrice={fullPrice} />
				</div>
				<div className={styles['buttons-block']}>
					<FavoriteButton handleClick={() => alert(12)} size='big' />
					<Button handleClick={() => alert(12)} text={'Add to cart'} size='big' className={styles['buy-button']} />
				</div>
			</div>
			{guarantee && <p className={styles['guarantee']}>Warranty: {guarantee} month</p>}
		</div>
	);
};

export default InfoBlock;
