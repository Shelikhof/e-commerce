import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface IProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	handleClick?: () => void;
	text?: string;
	color?: 'white' | 'blue';
	size?: 'big' | 'normal' | 'small';
	children?: React.ReactNode | React.ReactNode[] | string;
}

const Button: React.FC<IProp> = ({ handleClick, text, children, color = 'blue', size = 'normal', className = '', ...props }) => {
	let classes = [styles['blue-button']];
	classes.push(className);
	if (color === 'white') {
		classes[0] = styles['white-button'];
	}
	classes.push(styles[size]);
	return (
		<button className={classes.join(' ')} onClick={handleClick} {...props}>
			{text || children}
		</button>
	);
};

export { Button };
