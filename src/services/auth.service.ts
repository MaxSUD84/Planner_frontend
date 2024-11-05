import { axiosClassic } from '@/api/interceptors';

import { removeFromStorage, saveTokenStorage } from './auth-token.service';
import { IAuthForm, IAuthResponse } from '@/types';

export const authService = {
	async main(type: 'sign-in' | 'sign-up', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data,
		);
		if (response?.data?.accessToken)
			saveTokenStorage(response.data.accessToken);
		return response;
	},

	async getNewTokens() {
		const response =
			await axiosClassic.post<IAuthResponse>('/auth/access-token');
		if (response?.data?.accessToken)
			saveTokenStorage(response.data.accessToken);
		return response;
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/sign-out');
		if (response.data) removeFromStorage();
	},
};
