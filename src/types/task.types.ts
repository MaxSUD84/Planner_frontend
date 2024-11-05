import type { IBase } from './root.types';

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high',
}

export interface ITaskResponce extends IBase {
	name: string;
	priority?: EnumTaskPriority;
	isCompleted: boolean;
}

export type TypeTaskFormState = Partial<
	Omit<ITaskResponce, 'id' | 'updatedAt'>
>;
