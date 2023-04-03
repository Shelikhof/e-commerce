import React from 'react';
import styles from './Aside.module.css';
import closeIcon from '../../icons/close.svg';

interface IProp {
	children: React.ReactNode | React.ReactNode[];
	isActive: boolean;
	setIsActive: (isActive: boolean) => void;
}

const Aside: React.FC<IProp> = ({ children, isActive, setIsActive }) => {
	const classes = isActive ? [styles['side-menu'], styles['active']] : [styles['side-menu']];
	return (
		<aside className={classes.join(' ')}>
			<button onClick={() => setIsActive(false)} className={styles['close-button']}>
				<img src={closeIcon} />
			</button>
			{children}
		</aside>
	);
};

export default Aside;
