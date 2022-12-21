import { PostAPI } from 'api';
import { AppContext } from 'components/context';
import getConfig from 'next/config';
import { useContext, useEffect, useState } from 'react';

export const useGetPostContents = (slug: string) => {
	const { publicRuntimeConfig } = getConfig();
	const [contents, setContents] = useState<PostContent[]>([]);
	const [publishedDate, setPublishedDate] = useState<string>();
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		(async () => {
			setLoading(true);
			if (slug !== undefined) {
				const postAPI = new PostAPI(
					`${publicRuntimeConfig.apiURL}/posts`
				);
				const result = await postAPI.getContentBySlug(slug as string);
				if (result !== null) {
					const contentsFound = result.contents
					const contentsSorted = contentsFound.sort(function (a, b) {
						var textA = a.language.toUpperCase();
						var textB = b.language.toUpperCase();
						return textA < textB ? -1 : textA > textB ? 1 : 0;
					});
					setContents(contentsSorted);
					setPublishedDate(result.publishedDate);
				}
			}
			setLoading(false);
		})();
	}, [publicRuntimeConfig.apiURL, setLoading, slug]);
	return {
		contents,
		publishedDate
	};
};
