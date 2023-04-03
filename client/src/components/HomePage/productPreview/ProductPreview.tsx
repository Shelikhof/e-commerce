import React from 'react';
import { GoToButton } from '../../../UI';
import ProductItem from './ProductItem';
import styles from './ProductPreview.module.css';

interface IProp {
	productList: {
		category: string;
		previewImg: string;
		categoryId: string;
		products: {
			name: string;
			cost: number;
			image: string;
			id: string;
		}[];
	};
}

const ProductPreview: React.FC<IProp> = ({ productList }) => {
	return (
		<div className={styles['wrapper']}>
			<p className={styles['preview-text']}>{productList.category}</p>
			<div className={styles['preview']} style={{ backgroundImage: `url(${productList.previewImg})` }}>
				<p className={styles['category']}>{productList.category}</p>
				<button className={styles['link-btn']}>Source now</button>
			</div>
			<div className={styles['product-list']}>
				{productList.products.map((el, i) => (
					<ProductItem cost={el.cost} id={el.id} image={el.image} name={el.name} key={i} />
				))}
			</div>
			<div className={styles['button']}>
				<GoToButton handleClick={() => console.log(12)} label={'Source now'} />
			</div>
		</div>
	);
};

export default ProductPreview;
