import { QueryClient, useMutation } from '@tanstack/react-query';

import { taskService } from '@/services/tasks.service';

export default function useDeleteTask() {
	const queryClient = new QueryClient();

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['deleteTask'],
		mutationFn: async (id: string) => taskService.deleteTask(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});

	return { deleteTask, isDeletePending };
}
