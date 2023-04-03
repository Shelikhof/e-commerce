import React from 'react';

interface IProp {
	rating: number;
}

const Rating: React.FC<IProp> = ({ rating }) => {
	const equalsNumber = (rating: number, number: Number) => {
		const roundRating = Math.round(rating);
		if (number <= roundRating) return true;
		return false;
	};
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z'
					fill={equalsNumber(rating, 1) ? '#FF9017' : '#D4CDC5'}
				/>
			</svg>
			<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z'
					fill={equalsNumber(rating, 2) ? '#FF9017' : '#D4CDC5'}
				/>
			</svg>
			<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z'
					fill={equalsNumber(rating, 3) ? '#FF9017' : '#D4CDC5'}
				/>
			</svg>
			<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z'
					fill={equalsNumber(rating, 4) ? '#FF9017' : '#D4CDC5'}
				/>
			</svg>
			<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z'
					fill={equalsNumber(rating, 5) ? '#FF9017' : '#D4CDC5'}
				/>
			</svg>
		</div>
	);
};

export { Rating };
