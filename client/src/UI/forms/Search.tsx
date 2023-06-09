import React, { InputHTMLAttributes, useRef } from 'react';
import { Input } from './Input';
import styles from './Search.module.css';

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	setValue: (value: string) => void;
	handleFindBtn: () => void;
}

const Search: React.FC<IProp> = ({ value, setValue, handleFindBtn, ...props }) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleClick = () => {
		setValue('');
		inputRef.current?.focus();
	};
	return (
		<div className={styles.wrapper}>
			<button className={styles['find-btn']} onClick={() => handleFindBtn()}>
				<svg
					width='17'
					height='17'
					viewBox='0 0 17 17'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333V10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z'
						fill='#8B96A5'
					/>
				</svg>
			</button>
			<Input
				ref={inputRef}
				value={value}
				setValue={setValue}
				{...props}
				style={{ paddingRight: '30px', paddingLeft: '35px' }}
			/>

			{value && (
				<button className={styles['reset-btn']} onClick={() => handleClick()}>
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M13.4166 1.87587L12.1241 0.583374L6.99992 5.70754L1.87575 0.583374L0.583252 1.87587L5.70742 7.00004L0.583252 12.1242L1.87575 13.4167L6.99992 8.29254L12.1241 13.4167L13.4166 12.1242L8.29242 7.00004L13.4166 1.87587Z'
							fill='#0D6EFD'
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export { Search };
