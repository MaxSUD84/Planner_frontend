import { watch } from 'fs';
import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

import useCreateTask from './useCreateTask';
import { useUpdateTask } from './useUpdateTask';
import { taskService } from '@/services/tasks.service';
import { TypeTaskFormState } from '@/types';

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>;
	itemId: string;
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { updateTask } = useUpdateTask();
	const { createTask } = useCreateTask();

	const debounceCreateTtask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData);
		}, 1000),
		[],
	);

	const debounceUpdateTtask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData });
		}, 1000),
		[],
	);

	// Теперь debounceUpdateTtask вызывает updateTask только если itemId не пустой
	// или вызывает createTask если itemId пустой
	useEffect(() => {
		const { unsubscribe } = watch((formData) => {
			if (itemId) {
				debounceUpdateTtask({
					...formData,
					priority: formData.priority || undefined,
				});
			} else {
				debounceCreateTtask(formData);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [watch(), debounceCreateTtask, debounceUpdateTtask]);
}
