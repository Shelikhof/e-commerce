import React from 'react';
import styles from './Number.module.css';

interface IProp {
	value: number;
	setValue: (value: number) => void;
}

const Number: React.FC<IProp> = ({ value, setValue }) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setValue(value - 1)}>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M19 13H5V11H19V13Z' fill='#0D6EFD' />
				</svg>
			</button>
			<span>{value}</span>
			<button onClick={() => setValue(value + 1)}>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill='#0D6EFD' />
				</svg>
			</button>
		</div>
	);
};

export { Number };
