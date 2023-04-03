import React from 'react';
import Container from '../../Container';
import styles from './DesktopHeader.module.css';
import SearchBar from './SearchBar';
import logo from '../../../icons/logo.svg';
import IconList from './IconList';
import { HEADER_ICONS } from '../../../variables';
import { Link } from 'react-router-dom';

interface IProp {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	category: string;
	setCategory: (category: string) => void;
	categoryEnum: string[];
	handleClick: () => void;
}

const DesktopHeader: React.FC<IProp> = (props) => {
	return (
		<div className={styles['header-wrapper']}>
			<Container>
				<header className={styles['header']}>
					<Link to={'/'}>
						<img src={logo} />
					</Link>
					<SearchBar
						searchValue={props.searchValue}
						setSearchValue={props.setSearchValue}
						category={props.category}
						setCategory={props.setCategory}
						categoryEnum={props.categoryEnum}
						handleClick={props.handleClick}
					/>
					<IconList iconEnum={HEADER_ICONS} />
				</header>
			</Container>
		</div>
	);
};

export default DesktopHeader;
