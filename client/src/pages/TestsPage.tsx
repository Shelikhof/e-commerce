import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../variables';
import {
	Accordion,
	Button,
	Checkbox,
	DropdownSelection,
	Input,
	Number,
	RadioButton,
	Rating,
	Search,
	SeeAll,
	Select,
	Switch,
	Tabs,
	VerticalMenu,
} from '../UI';
import LargeProductItem from '../components/ProductsPage/LargeProductItem';
import SmallProductItem from '../components/ProductsPage/SmallProductItem';

const TestsPage = () => {
	const [active, setActive] = useState(0);
	const [value, setValue] = useState('');
	const [num, setNum] = useState(0);
	const list = ['as', 'asas', 'assad'];
	const [drop, setDrop] = useState('asas');
	const [switche, setSwitche] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Category');
	// const [searchValue, setSearchValue] = useState('');
	const [category, setCategory] = useState('Category');
	return (
		<div>
			TESTS
			{/* <MobileHeader isShowMenu={true} label={'as'} /> */}
			{/* <NavBar /> */}
			<Button handleClick={() => alert(12)} text={'Button'} color={'blue'} size={'big'} disabled />
			{/* <VerticalMenu active={active} list={} setActive={setActive} /> */}
			<hr />
			<Tabs active={active} list={list} setActive={setActive} />
			<hr />
			<Input value={value} setValue={setValue} hint={'this is hint'} label={'label'} />
			<hr />
			<Number value={num} setValue={setNum} />
			<hr />
			<Select value={category} setValue={setCategory} selectItems={CATEGORIES} />
			<hr />
			<Search value={value} setValue={setValue} handleFindBtn={() => alert(12)} />
			<hr />
			<Switch label={'Label'} isActive={switche} setIsActive={setSwitche} id={'cock'} />
			<hr />
			<DropdownSelection items={CATEGORIES} setValue={setDrop} value={drop} isActive={false} setIsActive={() => setActive} />
			<div style={{ width: '230px' }}>
				<Accordion label={'Test Accordion'}>
					<SeeAll>
						<Checkbox id='12'>
							<span>as1</span>
						</Checkbox>
						<Checkbox id='121'>
							<span>as</span>
						</Checkbox>
						<Checkbox id='122'>
							<span>2</span>
						</Checkbox>
						<Checkbox id='123'>
							<span>a3s</span>
						</Checkbox>
						<Checkbox id='112'>
							<span>4</span>
						</Checkbox>
						<Checkbox id='1122'>
							<span>12</span>
						</Checkbox>
					</SeeAll>
				</Accordion>
			</div>
			<RadioButton id='1' name='test12'>
				<span>1</span>
			</RadioButton>
			<RadioButton id='2' name='test12'>
				<span>2</span>
			</RadioButton>
			<Rating rating={0.2} />
			<LargeProductItem {...PRODUCTS[0]} />
			<SmallProductItem {...PRODUCTS[0]} />
		</div>
	);
};

export { TestsPage };
