import type { ITimeBlockResponse } from '@/types';

export const calcHoursLeft = (items: ITimeBlockResponse[] | undefined) => {
	const totalMinutes =
		items?.reduce((acc, item) => acc + item.duration, 0) || 0;
	const totalHours = Math.floor(totalMinutes / 60);
	// const totalDays = Math.floor(totalHours / 24);

	const hoursLeft = 24 - totalHours; // ВЫЧИСЛЯЕМ ОСТАВШИЕСЯ ЧАСЫ

	return { hoursLeft };
};
