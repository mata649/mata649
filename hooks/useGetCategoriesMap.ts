import { useEffect, useState } from 'react';
/**
 * Creates a Map of categories with the id as key and category information as value
 * @param {Category[]} categories - List of categories to map
 * @returns {Map<string,string>} - Categories Map
 */
export const useGetCategoriesMap = (categories: Category[]) => {
	const [categoriesMap, setCategoriesMap] = useState<
		Map<string, Omit<Category, 'id'>>
	>(new Map<string, Omit<Category, 'id'>>);
	useEffect(() => {
		const cache = new Map<string, Omit<Category, 'id'>>();
		categories.forEach((category) => {
			if (cache.has(category.id)) {
				return;
			}
			cache.set(category.id, {
				color: category.color,
				name: category.name,
			});
		});
		setCategoriesMap(cache);
	}, [categories]);

	return categoriesMap;
};
