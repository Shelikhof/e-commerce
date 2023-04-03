import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

interface IProp {
	images: string[];
}

const ImageCarousel: React.FC<IProp> = ({ images, ...props }) => {
	return (
		<Carousel {...props} className={'slider'} showStatus={false} showIndicators={false} infiniteLoop={true} thumbWidth={56} transitionTime={100}>
			{images.map((el, i) => (
				<img src={el} key={i} />
			))}
		</Carousel>
	);
};

export default ImageCarousel;
