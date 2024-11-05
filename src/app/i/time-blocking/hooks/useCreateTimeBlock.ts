import { useMutation, useQueryClient } from '@tanstack/react-query';

import { timeBlockService } from '@/services/time-block.service';
import type { TypeTimeBlockFormState } from '@/types';

export function useCreateTimeBLock() {
	const queryClient = useQueryClient();

	const { mutate: createTimeBLock, isPending: isCreatePending } = useMutation({
		mutationKey: ['create-time-block'],
		mutationFn: async (data: TypeTimeBlockFormState) =>
			timeBlockService.createTimeBlock(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] });
		},
	});

	return { createTimeBLock, isCreatePending };
}
