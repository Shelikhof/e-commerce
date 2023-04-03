import React from 'react';
import arrowIcon from '../../icons/arrow.svg';
import styles from './GoToButton.module.css';

interface IProp {
	label: string;
	handleClick: () => void;
}

const GoToButton: React.FC<IProp> = ({ label, handleClick }) => {
	return (
		<button className={styles['button']} onClick={() => handleClick()}>
			{label}
			<img src={arrowIcon} />
		</button>
	);
};

export { GoToButton };
