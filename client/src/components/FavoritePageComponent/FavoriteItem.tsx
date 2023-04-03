import React from 'react';
import { IFavoriteItem } from '../../interfaces/favorite.interface';
import { Button, Price } from '../../UI';
import styles from './FavoriteItem.module.css';
import trashIcon from '../../icons/trash.svg';
import cartIcon from '../../icons/blue-cart.svg';

const FavoriteItem: React.FC<IFavoriteItem> = ({ id, imageId, name, price, fullPrice }) => {
	return (
		<div className={styles['item']}>
			<img src={imageId} alt={name} className={styles['item-image']} />
			<div className={styles['info']}>
				<div>
					<Price price={price} fullPrice={fullPrice} />
					<p className={styles['name']}>{name}</p>
				</div>
				<div className={styles['item-footer']}>
					<Button color='white'>
						<p className={styles['button-text']}>
							<img src={cartIcon} />
							<span>Move to cart</span>
						</p>
					</Button>
					<Button color='white'>
						<img src={trashIcon} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FavoriteItem;
