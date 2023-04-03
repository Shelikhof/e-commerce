import React from 'react';
import { Select } from '../../UI';
import { SORT_BY_LABELS } from '../../variables';
import styles from './ContentTop.module.css';
import squareIcon from '../../icons/square.svg';
import linesIcon from '../../icons/lines.svg';
import { useAppSelector } from '../../store/hooks';

interface IProp {
	itemsCout: number;
	isLarge: boolean;
	setIsLarge: (isLarge: boolean) => void;
	sortBy: string;
	setSortBy: (sortBy: string) => void;
	isActiveFilterAside: boolean;
	setIsActiveFilterAside: (isActiveFilterAside: boolean) => void;
}

const ContentTop: React.FC<IProp> = ({ isLarge, itemsCout, setIsLarge, setSortBy, sortBy, setIsActiveFilterAside, isActiveFilterAside }) => {
	const { deviceWidth } = useAppSelector((state) => state.deviceWidth);
	return (
		<div className={styles['content-top']}>
			<p className={styles['item-count']}>{itemsCout} items</p>
			<div className={styles['right-side']}>
				<Select setValue={setSortBy} value={sortBy} selectItems={SORT_BY_LABELS} className={styles['sort-by']} />
				<div className={styles['view-type']}>
					<button className={!isLarge ? styles['active'] : ''} onClick={() => setIsLarge(false)}>
						<img src={squareIcon} />
					</button>

					<button className={isLarge ? styles['active'] : ''} onClick={() => setIsLarge(true)}>
						<img src={linesIcon} />
					</button>
				</div>
				{deviceWidth < 900 && (
					<button className={styles['filter-button']} onClick={() => setIsActiveFilterAside(!isActiveFilterAside)}>
						Filter
					</button>
				)}
			</div>
		</div>
	);
};

export default ContentTop;
