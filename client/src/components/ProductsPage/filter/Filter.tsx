import React, { useRef, useState } from 'react';
import { Accordion, Button, Checkbox, Input, SeeAll } from '../../../UI';
import styles from './Filter.module.css';
import { BRANDS } from '../../../variables';

const Filter = () => {
	const [minCost, setMinCost] = useState('');
	const [maxCost, setMaxCost] = useState('');
	const form = useRef<HTMLFormElement>(null);
	const asd = () => {
		if (form.current) {
			console.log(new FormData(form.current).getAll('c'));
		}
	};
	return (
		<div className={styles['filter']}>
			{/* <button onClick={asd}>dsfd</button> */}
			<form ref={form} onSubmit={(e) => e.preventDefault()} method='post'>
				<p className={styles['title']}>Filter</p>
				<div className={styles['cost']}>
					<p>Cost</p>
					<div className={styles['cost-inputs']}>
						<Input className={styles['input']} setValue={setMinCost} value={minCost} type='number' placeholder='From 0.99$' />
						<Input className={styles['input']} setValue={setMaxCost} value={maxCost} type='number' placeholder='To 5000$' />
					</div>
				</div>
				<div>
					<Accordion label='Brands' defaultValue={true}>
						<SeeAll>
							{BRANDS.map((el, i) => (
								<Checkbox id={el} name='c' key={i} value={el}>
									<span>{el}</span>
								</Checkbox>
							))}
						</SeeAll>
					</Accordion>
				</div>
				<div className={styles['buttons']}>
					<Button text='Confirm' handleClick={() => alert(12)} />
					<Button text='Reset' handleClick={() => alert(12)} color='white' type='reset' />
				</div>
			</form>
		</div>
	);
};

export default Filter;
