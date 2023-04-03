import React, { useState } from 'react';
import { HorizontalMenu, VerticalMenu } from '../../../UI';
import { ARTICLES } from '../../../variables';
import Container from '../../Container';
import styles from './ArticleBlock.module.css';

type article = {
	category: string;
	title: string;
	image: string;
	id: string;
};

interface IProp {
	articles: article[];
}

const ArticleBlock: React.FC<IProp> = ({ articles }) => {
	const [currentArticle, setCurrentArticle] = useState(0);
	return (
		<Container>
			<div className={styles['article-block']}>
				<div className={styles['menu']}>
					<VerticalMenu list={articles} active={currentArticle} setActive={setCurrentArticle} />
				</div>
				<div className={styles['horiz-menu']}>
					<HorizontalMenu list={articles} active={currentArticle} setActive={setCurrentArticle} />
				</div>
				<div className={styles['article-preview']} style={{ backgroundImage: `url(${articles[currentArticle].image})` }}>
					<div className={styles['info']}>
						<p>{articles[currentArticle].title}</p>
						<button className={styles['learrn-more']}>Learn More</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ArticleBlock;
