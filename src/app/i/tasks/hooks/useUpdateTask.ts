import { useMutation, useQueryClient } from '@tanstack/react-query';

import { taskService } from '@/services/tasks.service';
import { TypeTaskFormState } from '@/types';

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient();

	const { mutate: updateTask } = useMutation({
		mutationKey: ['updateTask'],
		mutationFn: async ({ id, data }: { id: string; data: TypeTaskFormState }) =>
			taskService.updateTask(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});

	return { updateTask };
}
