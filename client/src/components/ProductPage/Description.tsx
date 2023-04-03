import React from 'react';
import styles from './Description.module.css';

interface IProp {
	text: string;
}

const Description: React.FC<IProp> = ({ text }) => {
	return (
		<section className={styles['description']}>
			<p className={styles['title']}>Description</p>
			<p className={styles['text']}>{text}</p>
		</section>
	);
};

export default Description;
