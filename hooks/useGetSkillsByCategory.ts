import  { useEffect, useState } from 'react';

export const useGetSkillsByCategory = (
	skills: Skill[],
	categoriesMap: Map<string, Omit<Category, 'id'>>
) => {
	const [skillsByCategory, setSkillsByCategory] = useState<
		Map<string, SkillByCategory>
	>(new Map<string, SkillByCategory>());

	useEffect(() => {
		const skillsByCategoryMap: Map<string, SkillByCategory> = new Map<
			string,
			SkillByCategory
		>();
		for (const skill of skills) {
			const category = categoriesMap.get(skill.idCategory);
			if (category == undefined) {
				return;
			}
			if (skillsByCategoryMap.has(skill.idCategory)) {
				const itemMap = skillsByCategoryMap.get(
					skill.idCategory
				) as SkillByCategory;
				skillsByCategoryMap.set(skill.idCategory, {
					...itemMap,
					skills: [...itemMap.skills, { name: skill.name }],
				});
			} else {
				skillsByCategoryMap.set(skill.idCategory, {
					color: category.color,
					name: category.name,
					skills: [{ name: skill.name }],
				});
			}
		}

		setSkillsByCategory(skillsByCategoryMap);
	}, [categoriesMap, skills]);
	return skillsByCategory;
};
