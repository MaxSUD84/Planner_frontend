import { useState } from 'react';

import type { ITimerState } from '../timer.types';

import { useLoadSettings } from './useLoadSettings';
import { useUpdateRound } from './useUpdateRound';
import { IPomodoroRoundResponse } from '@/types';

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined;
};

export function useTimerActions({
	activeRound,
	setIsRunning,
	// setSecondsLeft,
	secondsLeft,
	rounds,
	setActiveRound,
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings();
	const { isUpdateRoundPending, updateRound } = useUpdateRound();

	const pauseHandler = () => {
		// const totalSeconds = workInterval * 60 - secondsLeft;

		setIsRunning(false);

		if (activeRound?.id)
			updateRound({
				id: activeRound.id,
				data: {
					totalSeconds: secondsLeft,
					isCompleted: secondsLeft >= workInterval * 60,
				},
			});
	};

	const playHandler = () => {
		setIsRunning(true);
	};

	const nextRoundHandler = () => {
		if (!activeRound?.id) return;

		updateRound({
			id: activeRound.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60,
			},
		});

		setIsRunning(false);
	};

	const prevRoundHandler = () => {
		//2023
		const lastCompletedRound = rounds?.findLast((round) => round.isCompleted);

		if (!lastCompletedRound?.id) return;

		updateRound({
			id: lastCompletedRound.id,
			data: {
				isCompleted: false,
				totalSeconds: 0,
			},
		});

		setActiveRound(lastCompletedRound);

		setIsRunning(false);
	};

	return {
		isUpdateRoundPending,
		prevRoundHandler,
		pauseHandler,
		playHandler,
		nextRoundHandler,
	};
}
