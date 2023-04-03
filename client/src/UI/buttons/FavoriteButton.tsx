import React from 'react';
import favoriteIcon from '../../icons/favorite.svg';
import styles from './FavoriteButton.module.css';

interface IProp {
	handleClick: () => void;
	size?: 'big' | 'normal';
}

const FavoriteButton: React.FC<IProp> = ({ handleClick, size = 'normal' }) => {
	const classes = [styles['favorite-button'], styles[size]];
	return (
		<button className={classes.join(' ')} onClick={handleClick}>
			<img src={favoriteIcon} />
		</button>
	);
};

export default FavoriteButton;
