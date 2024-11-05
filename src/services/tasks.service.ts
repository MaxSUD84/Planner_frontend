import dayjs from 'dayjs';

import { axiosWithAuth } from '@/api/interceptors';

import { ITaskResponce, TypeTaskFormState } from '@/types';

class TaskService {
	private BASE_URL = '/user-tasks';

	async getTasks() {
		const response = await axiosWithAuth.get<ITaskResponce[]>(this.BASE_URL);
		return response;
	}

	async createTask(data: TypeTaskFormState) {
		const { createdAt } = data;
		data.createdAt = dayjs(createdAt).toISOString();

		const response = await axiosWithAuth.post(this.BASE_URL, data);
		return response;
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const { createdAt } = data;
		data.createdAt = dayjs(createdAt).toISOString();

		const response = await axiosWithAuth.patch(`${this.BASE_URL}/${id}`, data);
		return response;
	}

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
		return response;
	}
}

export const taskService = new TaskService();
