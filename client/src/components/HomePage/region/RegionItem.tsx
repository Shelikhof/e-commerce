import React from 'react';
import styles from './RegionItem.module.css';

interface IProp {
	flag: string;
	name: string;
	domen: string;
}

const RegionItem: React.FC<IProp> = ({ domen, flag, name }) => {
	return (
		<div className={styles['wrapper']}>
			<img src={flag} />
			<div className={styles['info']}>
				<p className={styles['name']}>{name}</p>
				<p className={styles['domen']}>{domen}</p>
			</div>
		</div>
	);
};

export default RegionItem;
