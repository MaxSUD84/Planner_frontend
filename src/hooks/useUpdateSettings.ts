import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { userService } from '@/services/user.service';
import { TypeUserForm } from '@/types';

export function useUpdateSettings() {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['updateProfile'],
		mutationFn: async (data: TypeUserForm) => userService.update(data),
		onSuccess() {
			toast.success('Settings updated successfully!');
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});

	return { mutate, isPending };
}
