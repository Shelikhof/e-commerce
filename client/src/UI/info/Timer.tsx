import React, { useEffect, useState } from 'react';
import styles from './Timer.module.css';

interface IProp {
	date: string;
}

const Timer: React.FC<IProp> = ({ date }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const getTime = () => {
		const time = Date.parse(date) - Date.now() > 0 ? Date.parse(date) - Date.now() : 0;
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles['timer']}>
			<div className={styles['item']}>
				<p>{days.toString().padStart(2, '0')}</p>
				<p className={styles['label']}>Days</p>
			</div>
			<div className={styles['item']}>
				<p>{hours.toString().padStart(2, '0')}</p>
				<p className={styles['label']}>Hour</p>
			</div>
			<div className={styles['item']}>
				<p>{minutes.toString().padStart(2, '0')}</p>
				<p className={styles['label']}>Min</p>
			</div>
			<div className={styles['item']}>
				<p>{seconds.toString().padStart(2, '0')}</p>
				<p className={styles['label']}>Sec</p>
			</div>
		</div>
	);
};

export { Timer };
