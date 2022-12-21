import { useRouter } from 'next/router'
import React from 'react'

export const Row = ({
	skill,
	categoriesMap,
	handleDelete }: {
		skill: Skill,
		categoriesMap: Map<string, Omit<Category, 'id'>>,
		handleDelete: (id: string, name: string) => Promise<void>
	}) => {
	const router = useRouter()

	const handleRedirectToForm = () => {
		const { id, name, idCategory } = skill
		router.push({
			pathname: '/admin/skills/form',
			query: {
				id,
				name,
				idCategory
			}
		})
	}
	return (
		<tr className=''>
			<td className='text-center border '>{skill.name}</td>
			<td className='px-4 text-center border ' style={{ color: categoriesMap.get(skill.idCategory)?.color }}>{categoriesMap.get(skill.idCategory)?.name}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border' >
				<button className='hover:text-yellow-400' onClick={handleRedirectToForm}><span className="material-symbols-outlined">edit</span></button>
				<button className='hover:text-yellow-400' onClick={() => handleDelete(skill.id, skill.name)}><span className="material-symbols-outlined" >delete</span></button>
			</td>
		</tr>
	)
}
