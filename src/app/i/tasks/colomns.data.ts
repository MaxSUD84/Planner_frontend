import dayjs, { type Dayjs } from 'dayjs';
// подключение локализации (если надо)
// import 'dayjs/locale/ru';
// ISO недели
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

// плагин для работы с неделями
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export const FILTERS: Record<string, string> = {
	today: dayjs().startOf('day').format('YYYY-MM-DD'),
	tomorrow: dayjs().startOf('day').add(1, 'day').format('YYYY-MM-DD'),
	'on-this-week': dayjs().startOf('day').add(2, 'day').format('YYYY-MM-DD'),
	'on-next-week': dayjs()
		.add(1, 'week')
		.startOf('isoWeek')
		.format('YYYY-MM-DD'),
	later: dayjs().startOf('isoWeek').add(2, 'week').format('YYYY-MM-DD'),
};

export const COLUMNS = [
	{
		label: 'Сегодня',
		value: 'today',
	},
	{
		label: 'Завтра',
		value: 'tomorrow',
	},
	{
		label: 'На неделе',
		value: 'on-this-week',
	},
	{
		label: 'На следущей неделю',
		value: 'on-next-week',
	},
	{
		label: 'Позднее',
		value: 'later',
	},
	{
		label: 'Завершенные',
		value: 'completed',
	},
];
