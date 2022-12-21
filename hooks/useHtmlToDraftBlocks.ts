import { ContentState, RawDraftEntity } from 'draft-js';
import { useEffect, useState } from 'react';
import { ContentBlock } from 'react-draft-wysiwyg';

export const useHtmlToDraftBlocks = (html: string) => {
	let htmlToDraft: (
		text: string,
		customChunkRenderer?:
			| ((
					nodeName: string,
					node: HTMLElement
			  ) => RawDraftEntity | undefined)
			| undefined
	) => {
		contentBlocks: ContentBlock[];
		entityMap?: any;
	};

	if (typeof window === 'object') {
		htmlToDraft = require('html-to-draftjs').default;
	}
	const [contentState, setContentState] = useState<ContentState | null>(null);

	useEffect(() => {
		if (html?.length > 0) {
			const blocksFromHtml = htmlToDraft(html);

			const { contentBlocks, entityMap } = blocksFromHtml;
			setContentState(
				ContentState.createFromBlockArray(contentBlocks, entityMap)
			);
		}
	}, [html]);

	return contentState;
};
