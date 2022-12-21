import { GenericAPI } from './GenericAPI';

export class PostContentAPI extends GenericAPI<PostContent> {
	constructor(url: string) {
		super(url);
	}

}
