import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';

import { useProfile } from './useProfile';
import { TypeUserForm } from '@/types';

export function useInitialData(reset: UseFormReset<TypeUserForm>) {
	const { data, isSuccess } = useProfile();

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				name: data?.user?.name || '',
				email: data?.user?.email || '',
				password: '',
				// confirmPassword: '',
				workInterval: data?.user?.workInterval || 50,
				breakInterval: data?.user?.breakInterval || 10,
				intervalsCount: data?.user?.intervalsCount || 10,
			});
		}
	}, [isSuccess]);
}
