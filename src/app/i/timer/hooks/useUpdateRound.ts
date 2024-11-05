import { useMutation, useQueryClient } from '@tanstack/react-query';

import { pomodoroService } from '@/services/pomodoro.service';
import type { TypePomodoroRoundState } from '@/types';

export const useUpdateRound = () => {
	const queryClient = useQueryClient();

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update-round'],
		mutationFn: async ({
			id,
			data,
		}: {
			id: string;
			data: TypePomodoroRoundState;
		}) => pomodoroService.updateRound(id, data),
		onSuccess() {
			// queryClient.invalidateQueries({ queryKey: ["rounds"] });
			queryClient.invalidateQueries({ queryKey: ['today-session'] });
		},
	});
	return { updateRound, isUpdateRoundPending };
};
