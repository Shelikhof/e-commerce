import React from 'react';
import styles from './Icon.module.css';

interface IProp {
	icon: string;
	label: string;
}

const Icon: React.FC<IProp> = ({ icon, label }) => {
	return (
		<div className={styles['icon-item']}>
			<img src={icon} />
			<span>{label}</span>
		</div>
	);
};

export default Icon;
