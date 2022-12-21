import { GenericAPI } from './GenericAPI';

export class ProjectAPI extends GenericAPI<Project> {
	constructor(url: string) {
		super(url);
	}
}
