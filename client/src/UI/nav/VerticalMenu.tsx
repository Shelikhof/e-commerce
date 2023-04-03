import React from 'react';
import styles from './VerticalMenu.module.css';

interface IProp {
	active: number;
	setActive: (active: number) => void;
	list: {
		category: string;
	}[];
}

const VerticalMenu: React.FC<IProp> = ({ active, setActive, list }) => {
	return (
		<div className={styles['vertical-menu']}>
			<ul>
				{list.map((item, i) => {
					const classes = active === i ? [styles['item'], styles['active']] : [styles['item']];
					return (
						<li key={i} className={classes.join(' ')} onClick={() => setActive(i)}>
							{item.category}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { VerticalMenu };
