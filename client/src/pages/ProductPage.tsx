import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Container from '../components/Container';
import Characteristics from '../components/ProductPage/Characteristics';
import ContentTop from '../components/ProductPage/ContentTop';
import Description from '../components/ProductPage/Description';
import ImageCarousel from '../UI/carousel/ImageCarousel';
import { CHARACTERISTICS, DESCRIPTION, IMAGES, PRODUCT, PRODUCTS } from '../variables';

const ProductPage = () => {
	return (
		<Container>
			<div style={{ marginTop: '20px' }}>
				<ContentTop images={IMAGES} {...PRODUCT} />
				<Characteristics characteristics={CHARACTERISTICS} />
				<Description text={DESCRIPTION} />
			</div>
		</Container>
	);
};

export default ProductPage;
