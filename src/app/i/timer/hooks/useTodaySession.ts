import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useEffect } from 'react';

import type { ITimerState } from '../timer.types';

import { useLoadSettings } from './useLoadSettings';
import { pomodoroService } from '@/services/pomodoro.service';

export function useTodaySession({
	setActiveRound,
	setSecondsLeft,
}: ITimerState) {
	const { workInterval } = useLoadSettings();
	const {
		data: sessionsResponse,
		isLoading,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: ['today-session'],
		queryFn: () => pomodoroService.getTodaySession(),
	});

	const rounds = sessionsResponse?.data.rounds;

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find((round) => !round.isCompleted);
			setActiveRound(activeRound);

			if (activeRound && activeRound.totalSeconds) {
				setSecondsLeft(activeRound.totalSeconds);
			}
		}

		return () => {};
	}, [isSuccess, rounds]);

	return { sessionsResponse, isLoading, workInterval };
}
