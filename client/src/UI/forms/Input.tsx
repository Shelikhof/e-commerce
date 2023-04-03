import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	setValue: (value: string) => void;
	hint?: string;
	label?: string;
	className?: string | '';
}

const Input = React.forwardRef<HTMLInputElement, IProp>(({ value, setValue, label, hint, className, ...props }, ref) => {
	return (
		<div className={className}>
			{label && <p className={styles['label']}>{label}</p>}
			<input ref={ref} className={styles['input']} value={value} onChange={(e) => setValue(e.target.value)} {...props} />
			{hint && <p className={styles['hint']}>{hint}</p>}
		</div>
	);
});

export { Input };
