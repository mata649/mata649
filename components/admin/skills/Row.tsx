import { useRouter } from 'next/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";



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
			<td className='text-center border border-txt-light dark:border-txt-dark'>{skill.name}</td>
			<td className='px-4 text-center border border-txt-light dark:border-txt-dark' style={{ color: categoriesMap.get(skill.idCategory)?.color }}>{categoriesMap.get(skill.idCategory)?.name}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border border-txt-light dark:border-txt-dark' >
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faPenToSquare} /> </button>
				<button onClick={() => handleDelete(skill.id, skill.name)}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faTrashAlt} /></button>
			</td>
		</tr>
	)
}
