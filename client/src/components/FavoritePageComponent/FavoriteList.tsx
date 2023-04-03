import React from 'react';
import { IFavoriteItem } from '../../interfaces/favorite.interface';
import FavoriteItem from './FavoriteItem';
import styles from './FavoriteList.module.css';

interface IProp {
	favoriteList: IFavoriteItem[];
}

const FavoriteList: React.FC<IProp> = ({ favoriteList }) => {
	return (
		<div className={styles['list']}>
			{favoriteList.map((el, i) => (
				<FavoriteItem {...el} key={i} />
			))}
		</div>
	);
};

export default FavoriteList;
