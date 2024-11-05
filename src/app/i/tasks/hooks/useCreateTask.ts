import { QueryClient, useMutation } from '@tanstack/react-query';

import { taskService } from '@/services/tasks.service';
import { TypeTaskFormState } from '@/types';

export default function useCreateTask() {
	const queryClient = new QueryClient();

	const { mutate: createTask } = useMutation({
		mutationKey: ['createTask'],
		mutationFn: async (data: TypeTaskFormState) => taskService.createTask(data),
		// onMutate: async (data: TypeTaskFormState) => {
		//     await queryClient.cancelQueries({ queryKey: ['tasks'] });
		//     const previousData = queryClient.getQueryData(['tasks']) || [];
		//     if (previousData?.length > 0) {
		//         queryClient.setQueryData(['tasks'], [...previousData, data]);
		//     }
		//     return { previousData };
		// },
		// onError: (_, __, context) => {
		//     queryClient.setQueryData(['tasks'], context?.previousData);
		// },
		// onSettled: () => {
		//     queryClient.invalidateQueries({ queryKey: ['tasks'] });
		// }
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});

	return { createTask };
}
