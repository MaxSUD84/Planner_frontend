import type { Dispatch, SetStateAction } from 'react';

import type { IPomodoroRoundResponse } from '@/types';

export interface ITimerState {
	secondsLeft: number;
	setSecondsLeft: Dispatch<SetStateAction<number>>;
	activeRound: IPomodoroRoundResponse | undefined;
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>;
	isRunning: boolean;
	setIsRunning: Dispatch<SetStateAction<boolean>>;
}
