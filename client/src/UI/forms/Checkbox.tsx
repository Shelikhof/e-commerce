import React from 'react';
import styles from './Checkbox.module.css';

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
	children: React.ReactNode | React.ReactNode[];
	id: string;
}

const Checkbox: React.FC<IProp> = ({ children, id, ...props }) => {
	return (
		<label htmlFor={id} className={styles['label']}>
			<input type='checkbox' id={id} {...props} />
			<span className={styles['checkbox']}></span>
			{children}
		</label>
	);
};

export { Checkbox };
