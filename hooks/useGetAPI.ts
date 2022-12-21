import { GenericAPI } from 'api/GenericAPI';
import { useEffect, useRef, useState } from 'react';

export const useGetAPI = <T extends { id?: string }>(
	genericAPI: GenericAPI<T>
): GenericAPI<T> => {
	const [refAPI] = useState(genericAPI);

	return refAPI;
};
