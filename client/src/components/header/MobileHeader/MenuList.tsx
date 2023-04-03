import React from 'react';
import MenuItem from './MenuItem';

interface IProp {
	className?: string;
	menuItems: {
		url?: string;
		icon?: string;
		label: string;
	}[];
}

const MenuList: React.FC<IProp> = ({ menuItems, className }) => {
	return (
		<div className={className}>
			{menuItems.map((el, i) => (
				<MenuItem icon={el.icon} label={el.label} url={el.url} key={i} />
			))}
		</div>
	);
};

export default MenuList;
