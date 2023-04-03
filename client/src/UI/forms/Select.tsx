import React, { useEffect, useRef, useState } from 'react';
import { DropdownSelection } from './DropdownSelection';
import styles from './Select.module.css';

interface IProp {
	value: string;
	setValue: (value: string) => void;
	selectItems?: string[];
	className?: string;
	children?: React.ReactNode;
}

const Select: React.FC<IProp> = ({ selectItems, setValue, value, className, children }) => {
	const selectRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const path = event.composedPath();
			if (selectRef.current && !path.includes(selectRef.current)) {
				setIsActive(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);
	const [isActive, setIsActive] = useState(false);

	return (
		<div ref={selectRef} className={className}>
			<div className={styles['select']} onClick={() => setIsActive(!isActive)}>
				<p>{value}</p>
				<svg
					width='12'
					height='8'
					viewBox='0 0 12 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10.59 0.295044L6 4.87504L1.41 0.295044L0 1.70504L6 7.70504L12 1.70504L10.59 0.295044Z'
						fill='#8B96A5'
					/>
				</svg>
			</div>
			<DropdownSelection
				isActive={isActive}
				setIsActive={setIsActive}
				items={selectItems}
				value={value}
				setValue={setValue}>
				{children}
			</DropdownSelection>
		</div>
	);
};

export { Select };
