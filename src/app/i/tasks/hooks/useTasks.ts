import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { taskService } from '@/services/tasks.service';
import { ITaskResponce } from '@/types';

export function useTasks() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => taskService.getTasks(),
	});

	const [items, setItems] = useState<ITaskResponce[] | undefined>(data?.data);

	useEffect(() => {
		setItems(data?.data);
	}, [data?.data]);

	return { items, setItems };
}
