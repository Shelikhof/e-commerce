import React from 'react';
import styles from './SideMenu.module.css';
import avatarImage from '../../../image/Avatar.png';
import { SIDEBAR_ITEMS } from '../../../variables';
import MenuList from './MenuList';

interface IProp {
	setIsActive: (isActive: boolean) => void;
}

const SideMenu: React.FC<IProp> = ({ setIsActive }) => {
	return (
		<>
			<div className={styles['user-block']}>
				<img src={avatarImage} />
				<div className={styles['login-buttons']}>
					<button onClick={() => alert('do later')}>Sing in</button>
					<span>|</span>
					<button onClick={() => alert('do later')}>Register</button>
				</div>
			</div>
			<MenuList className={styles['menu']} menuItems={SIDEBAR_ITEMS.MENU_ITEMS} />
			<MenuList className={styles['info']} menuItems={SIDEBAR_ITEMS.INFO_ITEMS} />
			<MenuList className={styles['documents']} menuItems={SIDEBAR_ITEMS.DOCUMENTS} />
		</>
	);
};

export default SideMenu;
