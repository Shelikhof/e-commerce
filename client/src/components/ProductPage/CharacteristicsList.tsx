import React from 'react';
import styles from './CharacteristicsList.module.css';

interface IProp {
	groupCharacteristics: {
		title: string;
		value: string;
	}[];
}

const CharacteristicsList: React.FC<IProp> = ({ groupCharacteristics }) => {
	return (
		<ul className={styles['list']}>
			{groupCharacteristics.map((el, i) => (
				<li className={styles['item']} key={i}>
					<p className={styles['item-title']}>{el.title}</p>
					<p className={styles['item-value']}>{el.value}</p>
				</li>
			))}
		</ul>
	);
};

export default CharacteristicsList;
