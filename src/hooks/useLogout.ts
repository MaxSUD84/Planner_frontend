import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authService } from '@/services/auth.service';

export function useLogout() {
	const router = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			router.push('/auth');
		},
	});

	return { logout: mutate };
}
