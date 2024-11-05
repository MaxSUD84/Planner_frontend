import dayjs from 'dayjs';
import IsTomorrow from 'dayjs/plugin/IsTomorrow';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';

import { FILTERS } from './colomns.data';
import type { ITaskResponce } from '@/types';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.extend(IsTomorrow);

// console.log('today: ', FILTERS.today);
// console.log('tomorrow: ', FILTERS.tomorrow);
// console.log('on-this-week: ', FILTERS['on-this-week']);
// console.log('on-next-week: ', FILTERS['on-next-week']);
// console.log('later: ', FILTERS.later);
// console.log(
// 	dayjs(FILTERS['on-next-week']).isAfter(FILTERS['on-this-week'], 'day'),
// );

export const filterTasks = (
	tasks: ITaskResponce[] | undefined,
	value: string,
) => {
	switch (value) {
		case 'today':
			return tasks?.filter(
				(task) => dayjs(task.createdAt).isToday() && !task.isCompleted,
			);
		case 'tomorrow':
			return tasks?.filter(
				(task) => dayjs(task.createdAt).isTomorrow() && !task.isCompleted,
			);
		case 'on-this-week':
			return tasks?.filter(
				(task) =>
					// !dayjs(task.createdAt).isToday() &&
					// !dayjs(task.createdAt).isTomorrow() &&
					dayjs(task.createdAt).isSameOrAfter(FILTERS['on-this-week'], 'day') &&
					dayjs(task.createdAt).isBefore(FILTERS['on-next-week'], 'day') &&
					!task.isCompleted,
			);
		case 'on-next-week':
			return tasks?.filter(
				(task) =>
					dayjs(task.createdAt).isAfter(FILTERS['on-next-week'], 'day') &&
					dayjs(task.createdAt).isBefore(FILTERS['later'], 'day') &&
					!task.isCompleted,
			);
		case 'later':
			return tasks?.filter(
				(task) =>
					(dayjs(task.createdAt).isSameOrAfter(FILTERS['later'], 'day') ||
						!task.createdAt) &&
					!task.isCompleted,
			);
		case 'completed':
			return tasks?.filter((task) => task.isCompleted);

		default:
			return [];
	}
};
