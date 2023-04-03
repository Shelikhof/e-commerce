import React from 'react';
import styles from './Container.module.css';

interface IProp {
	children: React.ReactNode;
}

const Container: React.FC<IProp> = ({ children }) => {
	return <div className={styles['container']}>{children}</div>;
};

export default Container;
