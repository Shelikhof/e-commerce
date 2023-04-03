import React from 'react';
import styles from './Footer.module.css';
import Container from '../Container';
import facebookIcon from '../../icons/social-networks/facebook.svg';
import instagramIcon from '../../icons/social-networks/instagram.svg';
import twitterIcon from '../../icons/social-networks/twitter.svg';
import youtubeIcon from '../../icons/social-networks/youtube.svg';
import linkedinIcon from '../../icons/social-networks/linkedin.svg';
import logo from '../../icons/logo.svg';
import appStoreIcon from '../../icons/app-store.svg';
import googlePlayIcon from '../../icons/google-play.svg';
import { FOOTER_INFO } from '../../variables';
import InfoColumn from './InfoColumn';
import { Link } from 'react-router-dom';

const Footer = () => {
	const ICONS = [facebookIcon, instagramIcon, twitterIcon, youtubeIcon, linkedinIcon];
	return (
		<footer className={styles['footer-wrapper']}>
			<Container>
				<div className={styles['footer']}>
					<div className={styles['info']}>
						<Link to={'/'}>
							<img src={logo} className={styles['logo']} />
						</Link>
						<p>Best information about the company gies here but now lorem ipsum is</p>
						<div className={styles['icon-list']}>
							{ICONS.map((el, i) => (
								<button key={i}>
									<img src={el} />
								</button>
							))}
						</div>
					</div>
					{FOOTER_INFO.map((el, i) => (
						<InfoColumn menulist={el.menuList} title={el.title} key={i} />
					))}
					<div className={styles['get-app']}>
						<p className={styles['title']}>Get App</p>
						<img src={appStoreIcon} />
						<img src={googlePlayIcon} />
					</div>
				</div>
			</Container>
			<div className={styles['copyright']}>© {new Date().getFullYear()} Ecommerce.</div>
		</footer>
	);
};

export default Footer;
