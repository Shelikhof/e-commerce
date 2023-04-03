import React from 'react';
import styles from './HorizontalMenu.module.css';

interface IProp {
	active: number;
	setActive: (active: number) => void;
	list: {
		category: string;
	}[];
}

const HorizontalMenu: React.FC<IProp> = ({ active, setActive, list }) => {
	return (
		<nav className={styles['menu']}>
			<ul className={styles['menu-list']}>
				{list.map((item, i) => {
					const classes = active === i ? [styles['item'], styles['active']] : [styles['item']];
					return (
						<li key={i} className={classes.join(' ')} onClick={() => setActive(i)}>
							{item.category}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export { HorizontalMenu };
