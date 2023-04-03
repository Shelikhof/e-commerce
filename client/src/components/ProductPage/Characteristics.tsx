import React, { useState } from 'react';
import CharacteristicsList from './CharacteristicsList';
import styles from './Characteristics.module.css';

interface IProp {
	characteristics: {
		label: string;
		groupCharacteristics: {
			title: string;
			value: string;
		}[];
	}[];
}

const Characteristics: React.FC<IProp> = ({ characteristics }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section className={styles['characteristics']}>
			<p className={styles['title']}>Characteristics</p>
			<div className={styles['list']} style={{ height: !isOpen ? '250px' : 'auto' }}>
				{characteristics.map((el, i) => (
					<div key={i}>
						<p className={styles['label']}>{el.label}</p>
						<CharacteristicsList groupCharacteristics={el.groupCharacteristics} />
					</div>
				))}
			</div>
			<div className={isOpen ? [styles['show-button-block'], styles['show-button-block--active']].join(' ') : styles['show-button-block']}>
				<button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Show'}</button>
			</div>
		</section>
	);
};

export default Characteristics;
