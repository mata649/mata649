import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError<any, any>): string => {

	if(error.response?.status === 400){
		error.response?.data.message[0].error as string
	}
	return error.response?.data.message as string;


};
