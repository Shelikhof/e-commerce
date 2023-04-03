import React, { useState } from 'react';
import styles from './SeeAll.module.css';

interface IProp {
	children: React.ReactNode[];
	limit?: number;
}

const SeeAll: React.FC<IProp> = ({ children, limit = 5 }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div>
			<div>
				{isActive
					? children
					: children.map((el, i) => {
							if (i >= 5) return;
							return <p key={i}>{el}</p>;
					  })}
			</div>
			<button className={styles['button']} onClick={() => setIsActive(!isActive)}>
				{isActive ? 'Close' : 'See all'}
			</button>
		</div>
	);
};

export { SeeAll };
