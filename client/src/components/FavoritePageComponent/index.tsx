import React from 'react';
import { IFavorite, IFavoriteItem } from '../../interfaces/favorite.interface';
import FavoriteList from './FavoriteList';
import styles from './index.module.css';

interface IProp {
	favoriteList: IFavoriteItem[];
}

const index: React.FC<IProp> = ({ favoriteList }) => {
	return (
		<div className={styles['wrapper']}>
			<p className={styles['title']}>Saved for later</p>
			<FavoriteList favoriteList={favoriteList} />
		</div>
	);
};

export default index;
