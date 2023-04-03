import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

interface IProp {
	url?: string;
	icon?: string;
	label: string;
}

const MenuItem: React.FC<IProp> = ({ label, icon, url = '/' }) => {
	return (
		<Link to={url}>
			<button className={styles['menu-item']}>
				{icon ? <img src={icon} /> : <span className={styles['span']}></span>}
				<span>{label}</span>
			</button>
		</Link>
	);
};

export default MenuItem;
