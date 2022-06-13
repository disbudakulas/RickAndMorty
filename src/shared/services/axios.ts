import { Platform } from 'react-native';

//Third Party
import axios from 'axios';

const AxiosInstance = axios.create();

let refreshTokenPromise: any;

AxiosInstance.defaults.baseURL = 'https://rickandmortyapi.com/api/';

AxiosInstance.interceptors.request.use(
	async config => {
		return {
			...config,
			headers: {
				...config.headers,
				'content-type': 'application/json',
			},
		};
	},
	error => {
		return Promise.reject(error);
	},
);
AxiosInstance.interceptors.response.use(
	response => {
		if (response.data?.status != false) {
			return response;
		}
		return Promise.reject('Status false');
	},
	async err => Promise.reject(err),
);
export default AxiosInstance;
