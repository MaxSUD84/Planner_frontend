import { useMutation, useQueryClient } from '@tanstack/react-query';

import { timeBlockService } from '@/services/time-block.service';
import type { TypeTimeBlockFormState } from '@/types';

export function useUpdateTimeBLock() {
	const queryClient = useQueryClient();

	const { mutate: updateTimeBLock, isPending: isUpdatePending } = useMutation({
		mutationKey: ['update-time-block'],
		mutationFn: async ({
			id,
			data,
		}: {
			id: string;
			data: TypeTimeBlockFormState;
		}) => timeBlockService.updateTimeBlock(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] });
		},
	});

	return { updateTimeBLock, isUpdatePending };
}
