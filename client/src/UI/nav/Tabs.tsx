import React from 'react';
import styles from './Tabs.module.css';

interface IProp {
	active: number;
	setActive: (active: number) => void;
	list: string[];
}

const Tabs: React.FC<IProp> = ({ active, setActive, list }) => {
	return (
		<div className={styles['tabs']}>
			<ul>
				{list.map((item, i) => {
					const classes = active === i ? [styles['item'], styles['active']] : [styles['item']];
					return (
						<li key={i} className={classes.join(' ')} onClick={() => setActive(i)}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { Tabs };
