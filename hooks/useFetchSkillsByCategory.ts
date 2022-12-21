import axios from 'axios';
import getConfig from 'next/config';
import { useEffect, useState } from 'react';

export interface SkillByCategory extends Omit<Category, 'id'> {
	skills: Omit<Skill, 'id' | 'idCategory'>[];
}

export const useFetchSkillsByCategory = () => {
	const [skills, setSkills] = useState<SkillByCategory[]>([]);
	const { publicRuntimeConfig } = getConfig();
	useEffect(() => {
		axios
			.get(`${publicRuntimeConfig.apiURL}/skills/category`)
			.then((res) => {
				setSkills(res.data);

			})
			.catch((error) => {
				console.log(error);
			});
	}, [publicRuntimeConfig.apiURL]);
	return {
		skills,
	};
};
