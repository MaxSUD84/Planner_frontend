import { useMutation, useQueryClient } from '@tanstack/react-query';

import { timeBlockService } from '@/services/time-block.service';

export function useDeletetimeBlock(itemId: string) {
	const queryClient = useQueryClient();

	const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete-time-block', 'id'],
		mutationFn: async () => timeBlockService.deleteTimeBlock(itemId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] });
		},
	});

	return { deleteTimeBlock, isDeletePending };
}