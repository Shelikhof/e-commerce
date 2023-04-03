import React, { useState } from 'react';
import Container from '../../Container';
import styles from './MobileHeader.module.css';
import menuIcon from '../../../icons/menu.svg';
import cartIcon from '../../../icons/cart-black.svg';
import userIcon from '../../../icons/user-black.svg';
import backArrow from '../../../icons/left-arrow.svg';
import logo from '../../../icons/logo-colored-m.svg';
import SideMenu from './SideMenu';
import Aside from '../../../UI/nav/Aside';
import { Link } from 'react-router-dom';

interface IProp {
	isShowMenu?: boolean;
	label?: string;
}

const MobileHeader: React.FC<IProp> = ({ isShowMenu = true, label }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={styles['mobile-header-wrapper']}>
			<Aside isActive={isActive} setIsActive={setIsActive}>
				<SideMenu setIsActive={setIsActive} />
			</Aside>
			<Container>
				<header className={styles['mobile-header']}>
					{isShowMenu ? (
						<div className={styles['left-side']}>
							<button onClick={() => setIsActive(true)}>
								<img src={menuIcon} />
							</button>
							<img src={logo} />
						</div>
					) : (
						<div className={styles['left-side']}>
							<button>
								<img src={backArrow} />
							</button>
							<p>{label}</p>
						</div>
					)}
					<div className={styles['right-side']}>
						<Link to={'/cart'}>
							<button>
								<img src={cartIcon} />
							</button>
						</Link>
						<Link to={'/profile'}>
							<button>
								<img src={userIcon} />
							</button>
						</Link>
					</div>
				</header>
			</Container>
		</div>
	);
};

export default MobileHeader;
