import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface IUseLocalStorage<T> {
	key: string;
	initialValue: T;
}
export const useLocalStorage = <T>({
	key,
	initialValue,
}: IUseLocalStorage<T>): [T, Dispatch<SetStateAction<T>>, boolean] => {
	const [isLoading, setIsLoading] = useState(true);
	const isMounted = useRef(false);

	const [value, setValue] = useState<T>(
		initialValue,
		// () => {
		// 	const jsonValue = window.localStorage.getItem(key);
		// 	if (jsonValue != null) return JSON.parse(jsonValue);
		// 	if (typeof initialValue === 'function') {
		// 		return (initialValue as () => T)();
		// 	} else {
		// 		return initialValue;
		// 	}
		// }
	);

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				setValue(JSON.parse(item));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}

		return () => {
			isMounted.current = false;
		};
	}, [key]);

	useEffect(() => {
		try {
			if (!isMounted.current) {
				window.localStorage.setItem(key, JSON.stringify(value));
			} else {
				isMounted.current = true;
			}
		} catch (error) {
			console.log(error);
		}
	}, [key, value]);

	return [value, setValue, isLoading] as [
		T,
		Dispatch<SetStateAction<T>>,
		boolean,
	];
};
