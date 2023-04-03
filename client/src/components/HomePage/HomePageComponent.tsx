import React from 'react';
import { Timer } from '../../UI';
import { ARTICLES, DEALS, HOME_PRODUCT } from '../../variables';
import ArticleBlock from './articles/ArticleBlock';
import DealsList from './dealsList/DealsList';
import styles from './HomePageComponent.module.css';
import ProductPreview from './productPreview/ProductPreview';
import RegionList from './region/RegionList';

const HomePageComponent = () => {
	return (
		<>
			<section className={styles['home-page']}>
				<ArticleBlock articles={ARTICLES} />
			</section>
			<section className={styles['deals']}>
				<div className={styles['deals-timer']}>
					<p className={styles['title']}>Deals and offers</p>
					<Timer date={'2023-04-22 03:13:15.79+03'} />
				</div>
				<DealsList deales={DEALS} />
			</section>
			<section className={styles['product-wrapper']}>
				<div className={styles['product-list']}>
					<ProductPreview productList={HOME_PRODUCT} />
					<ProductPreview productList={HOME_PRODUCT} />
				</div>
			</section>
			<section className={styles['regions']}>
				<h3>Suppliers by region</h3>
				<RegionList />
			</section>
		</>
	);
};

export default HomePageComponent;
