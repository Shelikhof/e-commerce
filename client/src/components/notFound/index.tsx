import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI';
import styles from './index.module.css';

const index = () => {
	return (
		<div className={styles['wrapper']}>
			<p className={styles['first-row']}>Page not found</p>
			<p className={styles['second-row']}>¯\_(ツ)_/¯</p>
			<Link to={'/'}>
				<Button>Go home page</Button>
			</Link>
		</div>
	);
};

export default index;
