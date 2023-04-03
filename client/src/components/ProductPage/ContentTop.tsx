import React from 'react';
import { Button, Rating } from '../../UI';
import FavoriteButton from '../../UI/buttons/FavoriteButton';
import ImageCarousel from '../../UI/carousel/ImageCarousel';
import { IMAGES } from '../../variables';
import styles from './ContentTop.module.css';
import InfoBlock from './InfoBlock';

interface IProp {
	id: string;
	name: string;
	rating: number;
	soldCount: number;
	count: number;
	images: string[];
	guarantee?: number;
	price: number;
	fullPrice?: number;
	brand: {
		name: string;
		id: string;
	};
}

const ContentTop: React.FC<IProp> = ({ images, ...props }) => {
	return (
		<div className={styles['content-top']}>
			<div className={styles['carousel']}>
				<ImageCarousel images={images} />
			</div>
			<InfoBlock {...props} />
		</div>
	);
};

export default ContentTop;
