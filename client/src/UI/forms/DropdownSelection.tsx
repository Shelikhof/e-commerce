import React from 'react';
import styles from './DropdownSelection.module.css';

interface IProp {
	items?: string[];
	value: string;
	setValue: (value: string) => void;
	isActive: boolean;
	setIsActive: (value: boolean) => void;
	children?: React.ReactNode;
}

const DropdownSelection: React.FC<IProp> = ({
	items,
	value,
	setValue,
	isActive,
	setIsActive,
	children,
}) => {
	const handleClick = (el: string) => {
		setValue(el);
		setIsActive(false);
	};
	return (
		<>
			{isActive && items && (
				<div className={styles['drop-down']}>
					{items.map((el) => {
						const classes = el === value ? [styles['active'], styles['items']] : [styles['items']];
						return (
							<p className={classes.join(' ')} onClick={() => handleClick(el)} key={el}>
								{el}
							</p>
						);
					})}
				</div>
			)}
			{isActive && children && <div className={styles['drop-down']}>{children}</div>}
		</>
	);
};

export { DropdownSelection };
