import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './IconList.module.css';

interface IProp {
	iconEnum: {
		icon: string;
		label: string;
		url: string;
	}[];
}

const IconList: React.FC<IProp> = ({ iconEnum }) => {
	return (
		<div className={styles['icon-list']}>
			{iconEnum.map((el, i) => (
				<Link to={el.url} key={i}>
					<Icon icon={el.icon} label={el.label} />
				</Link>
			))}
		</div>
	);
};

export default IconList;
