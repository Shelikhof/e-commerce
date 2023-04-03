import React from 'react';
import styles from './InfoColumn.module.css';

interface IProp {
	title: string;
	menulist: {
		label: string;
	}[];
}

const InfoColumn: React.FC<IProp> = ({ menulist, title }) => {
	return (
		<div>
			<p className={styles['title']}>{title}</p>
			<ul className={styles['list']}>
				{menulist.map((el, i) => (
					<li className={styles['item']} key={i}>
						{el.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default InfoColumn;
