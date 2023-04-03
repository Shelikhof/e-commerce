import React, { useState } from 'react';
import arrowUp from '../../icons/arrow-up.svg';
import arrowDown from '../../icons/arrow-down.svg';
import styles from './Accordion.module.css';

interface IProp {
	label?: string;
	defaultValue?: boolean;
	children?: React.ReactNode | React.ReactNode[];
}

const Accordion: React.FC<IProp> = ({ label = '', children, defaultValue = false }) => {
	const [isActive, setIsActive] = useState(defaultValue);

	return (
		<div className={styles['accordion']}>
			<div className={styles['label']} onClick={() => setIsActive(!isActive)}>
				<p>{label}</p>
				{isActive ? <img src={arrowUp} className={styles['arrow-up']} /> : <img src={arrowDown} className={styles['arrow-down']} />}
			</div>
			{isActive && <div>{children}</div>}
		</div>
	);
};

export { Accordion };
