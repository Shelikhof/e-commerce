import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { CATEGORIES } from '../../variables';
import DesktopHeader from './Header/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';

interface IProp {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	selectedCategory: string;
	setSelectedCategory: (selectedCategory: string) => void;
	handleSearchButton: () => void;
}

const Header: React.FC<IProp> = (props) => {
	const { deviceWidth } = useAppSelector((state) => state.deviceWidth);
	return (
		<div>
			{deviceWidth > 1200 ? (
				<DesktopHeader
					searchValue={props.searchValue}
					setSearchValue={props.setSearchValue}
					category={props.selectedCategory}
					setCategory={props.setSelectedCategory}
					categoryEnum={CATEGORIES}
					handleClick={props.handleSearchButton}
				/>
			) : (
				<MobileHeader />
			)}
		</div>
	);
};

export default Header;
