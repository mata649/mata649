import { GenericAPI } from './GenericAPI';

export class SkillAPI extends GenericAPI<Skill> {
	constructor(url: string) {

		super(url);
	}
}
