import React, { useState } from 'react';
import { Button, Input, Select } from '../../../UI';
import styles from './SearchBar.module.css';

interface IProp {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	category: string;
	setCategory: (category: string) => void;
	categoryEnum: string[];
	handleClick: () => void;
}

const SearchBar: React.FC<IProp> = ({
	searchValue,
	setSearchValue,
	category,
	setCategory,
	categoryEnum,
	handleClick,
}) => {
	return (
		<div className={styles['search-wrapper']}>
			<Input value={searchValue} setValue={setSearchValue} className={styles['search-input']} />
			<Select
				selectItems={categoryEnum}
				value={category}
				setValue={setCategory}
				className={styles['search-select']}
			/>
			<Button
				handleClick={handleClick}
				text={'Search'}
				style={{ width: '100px', borderRadius: '0px', boxShadow: 'none' }}
			/>
		</div>
	);
};

export default SearchBar;
