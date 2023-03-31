import { GenericAPI } from 'api/GenericAPI';
import {  useState } from 'react';

export const useGetAPI = <T extends { id?: string }>(
	genericAPI: GenericAPI<T>
): GenericAPI<T> => {
	const [refAPI] = useState(genericAPI);

	return refAPI;
};
