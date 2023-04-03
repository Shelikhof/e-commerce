import React, { useState } from 'react';
import menuIcon from '../../../icons/menu.svg';
import { Select } from '../../../UI';
import { NAV_ITEM } from '../../../variables';
import Container from '../../Container';
import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={styles['nav-wrapper']}>
			<Container>
				<div className={styles['navbar']}>
					<ul className={styles['menu-list']}>
						<li className={styles['menu-item']}>
							<button>
								<img src={menuIcon} />
								<span>All category</span>
							</button>
						</li>
						{NAV_ITEM.map((el) => (
							<li className={styles['menu-item']} key={el}>
								<button>{el}</button>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
