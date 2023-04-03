import React from 'react';
import styles from './Switch.module.css';

interface IProp {
	label: string;
	isActive: boolean;
	setIsActive: (isActive: boolean) => void;
	id: string;
}

const Switch: React.FC<IProp> = ({ label, isActive, setIsActive, id }) => {
	return (
		<div className={styles['switch']}>
			<div className={styles['switch-input']}>
				<input type='checkbox' id={id} onChange={() => setIsActive(!isActive)} checked={isActive} />
				<label htmlFor={id}></label>
			</div>
			<span>{label}</span>
		</div>
	);
};

export { Switch };
