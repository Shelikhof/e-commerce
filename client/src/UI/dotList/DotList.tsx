import React from 'react';
import styles from './DotList.module.css';

interface IProp {
	children: React.ReactNode[];
}

const DotList: React.FC<IProp> = ({ children }) => {
	const elem = children.slice(1);
	return (
		<div className={styles['list']}>
			{children[0]}
			{elem.map((el, i) => (
				<span key={i} className={styles['item']}>
					<span className={styles['dot']}></span>
					{el}
				</span>
			))}
		</div>
	);
};

export { DotList };
