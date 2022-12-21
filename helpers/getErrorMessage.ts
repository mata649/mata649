import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError<any, any>): string => {
	const generalStatusCodes = [401,404,500]

	if (generalStatusCodes.includes(error.response?.status as number)) {
		return error.response?.data.message as string;
	}
	//TODO: create request error parser when the requests object will be implemented in the backend
	// if(error.response?.status === 400){
	// 	error.response.data.me
	// }
	return 'Unknown error'

};
