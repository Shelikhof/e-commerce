import React from 'react';
import styles from './RadioButton.module.css';

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string;
	children: React.ReactNode | React.ReactNode[];
	name: string;
}

const RadioButton: React.FC<IProp> = ({ id, children, ...props }) => {
	return (
		<label htmlFor={id} className={styles['label']}>
			<input id={id} type='radio' {...props} />
			<span className={styles['radio-button']}></span>
			{children}
		</label>
	);
};

export { RadioButton };
