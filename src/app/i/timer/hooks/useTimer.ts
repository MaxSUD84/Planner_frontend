import { useEffect, useState } from 'react';

import type { ITimerState } from '../timer.types';

import { useLoadSettings } from './useLoadSettings';
import type { IPomodoroRoundResponse } from '@/types';

export function useTimer(): ITimerState {
	const { breakInterval, workInterval } = useLoadSettings();

	const [isRunning, setIsRunning] = useState(false);
	const [isBreakTime, setIsBreakTime] = useState(false);

	const [secondsLeft, setSecondsLeft] = useState(workInterval * 60);
	const [activeRound, setActiveRound] = useState<IPomodoroRoundResponse>();

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isRunning) {
			interval = setInterval(() => {
				setSecondsLeft((secondsLeft) => secondsLeft - 1);
			}, 1000);
		} else if (!isRunning && secondsLeft !== 0 && interval) {
			clearInterval(interval);
		}
		return () => void (interval && clearInterval(interval));
	}, [isRunning, secondsLeft, workInterval, activeRound]);

	useEffect(() => {
		// Ранний выход из таймера
		if (secondsLeft > 0) return;

		// Переключение режима и установка нового времени одной операции
		setIsBreakTime(!isBreakTime);
		setSecondsLeft(isBreakTime ? breakInterval * 60 : workInterval * 60);
	}, [isRunning, secondsLeft, workInterval, activeRound]);

	return {
		activeRound,
		setActiveRound,
		isRunning,
		setIsRunning,
		secondsLeft,
		setSecondsLeft,
	};
}
