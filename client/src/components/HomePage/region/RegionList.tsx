import React from 'react';
import { REGION } from '../../../variables';
import RegionItem from './RegionItem';
import styles from './RegionList.module.css';

const RegionList = () => {
	return (
		<div className={styles['wrapper']}>
			{REGION.map((el, i) => (
				<RegionItem domen={el.domen} flag={el.flag} name={el.name} key={i} />
			))}
		</div>
	);
};

export default RegionList;
