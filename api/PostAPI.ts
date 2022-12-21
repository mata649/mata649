import axios from 'axios';
import { GenericAPI } from './GenericAPI';

export class PostAPI extends GenericAPI<Post> {
	constructor(url: string) {
		super(url);
	}
	async getContentBySlug(
		slug: string
	): Promise<{ contents: PostContent[]; publishedDate: string } | null> {
		try {
			const res = await axios.get(`${this.url}/${slug}/content`);

			return {
				contents: res.data.data as PostContent[],
				publishedDate: res.data.publishedDate as string,
			};
		} catch (error) {
			return null;
		}
	}
}
