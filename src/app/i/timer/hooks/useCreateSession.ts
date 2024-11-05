import { useMutation, useQueryClient } from '@tanstack/react-query';

import { pomodoroService } from '@/services/pomodoro.service';

export function useCreateSession() {
	const queryClient = useQueryClient();

	const { mutate: createSession, isPending: isCreatePending } = useMutation({
		mutationKey: ['create-session'],
		mutationFn: async () => pomodoroService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['today-session'] });
		},
	});
	return { createSession, isCreatePending };
}
