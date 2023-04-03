import React, { useState } from 'react';
import { IProduct } from '../../interfaces';
import ContentTop from './ContentTop';
import LargeProductItem from './LargeProductItem';
import styles from './ProductList.module.css';
import SmallProductItem from './SmallProductItem';
import Aside from '../../UI/nav/Aside';
import Filter from './filter/Filter';

interface IProp {
	products: IProduct[];
}

const ProductList: React.FC<IProp> = ({ products }) => {
	const [isLarge, setIsLarge] = useState(true);
	const [sortBy, setSortBy] = useState('Popularity');
	const [isActiveFilterAside, setIsActiveFilterAside] = useState(false);

	return (
		<div className={styles['product-list']}>
			<Aside isActive={isActiveFilterAside} setIsActive={setIsActiveFilterAside}>
				<Filter />
			</Aside>
			<ContentTop
				isLarge={isLarge}
				itemsCout={12000}
				setIsLarge={setIsLarge}
				setSortBy={setSortBy}
				sortBy={sortBy}
				setIsActiveFilterAside={setIsActiveFilterAside}
				isActiveFilterAside={isActiveFilterAside}
			/>
			<div className={!isLarge ? styles['small-items-list'] : ''}>
				{isLarge
					? products.map((el, i) => (
							<div style={{ marginBottom: '10px' }} key={i}>
								<LargeProductItem {...el} />
							</div>
					  ))
					: products.map((el, i) => (
							<div style={{ marginBottom: '10px' }} key={i}>
								<SmallProductItem {...el} />
							</div>
					  ))}
			</div>
		</div>
	);
};

export default ProductList;
