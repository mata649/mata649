import { GenericAPI } from 'api/GenericAPI';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../components/context/appContext';

export const useFetch = <T extends { id?: string }>(
	genericAPI: GenericAPI<T>,
	paginationDefined: Pagination = { currentPage: 1, limit: 10 },
	orderByDefined: Order[] = [],
	filtersDefined: Partial<T> = {}
) => {
	const [items, setItems] = useState<T[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [filters, setFilters] = useState<Partial<T>>(
		filtersDefined ? filtersDefined : {}
	);
	const [pagination, setPagination] = useState<Pagination>(paginationDefined);
	const [orderBy, setOrderBy] = useState<Order[]>(orderByDefined);
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await genericAPI.get(filters, pagination, orderBy);

			if (result) {
				setItems(result.items);
				setTotalPages(result.totalPages);
			} else {
				setItems([]);
				setTotalPages(0);
			}
			setLoading(false);
		})();
	}, [filters, genericAPI, orderBy, pagination, setLoading]);
	return {
		items,
		setItems,
		setPagination,
		setFilters,
		filters,
		pagination,
		totalPages,
		setOrderBy,
		orderBy,
	};
};
