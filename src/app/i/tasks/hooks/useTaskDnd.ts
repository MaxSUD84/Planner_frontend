import { DropResult } from '@hello-pangea/dnd';

import { FILTERS } from '../colomns.data';

import { useUpdateTask } from './useUpdateTask';

export function useTaskDnd() {
	const { updateTask } = useUpdateTask();

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const { source, destination, draggableId } = result;
		const destinationColomnId = destination.droppableId;
		const sourceColomnId = source.droppableId;

		if (destinationColomnId === sourceColomnId) return;

		if (destinationColomnId === 'completed') {
			updateTask({
				id: draggableId,
				data: {
					isCompleted: true,
				},
			});
			return;
		}

		// FILTERS TASKS
		const newCreatedAt = FILTERS[destinationColomnId];

		updateTask({
			id: draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false,
			},
		});
	};

	return { onDragEnd };
}
