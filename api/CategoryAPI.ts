import { GenericAPI } from './GenericAPI';

export class CategoryAPI extends GenericAPI<Category> {
	constructor(url: string) {
		super(url);
	}
}
