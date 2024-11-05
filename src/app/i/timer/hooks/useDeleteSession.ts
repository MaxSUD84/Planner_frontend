import { useMutation, useQueryClient } from '@tanstack/react-query';

import { pomodoroService } from '@/services/pomodoro.service';

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient();

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete-session'],
		mutationFn: async (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['today-session'] });
			onDeleteSuccess();
		},
	});
	return { deleteSession, isDeletePending };
}
