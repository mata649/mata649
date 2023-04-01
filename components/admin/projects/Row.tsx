import { useRouter } from 'next/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

export const Row = ({
	project,
	categoriesMap,
	handleDelete }: {
		project: Project,
		categoriesMap: Map<string, Omit<Category, 'id'>>,
		handleDelete: (id: string, name: string) => Promise<void>
	}) => {
	const router = useRouter()

	const handleRedirectToForm = () => {
		const { id, name, idCategory, description, githubUrl } = project
		router.push({
			pathname: '/admin/projects/form',
			query: {
				id,
				name,
				idCategory,
				description,
				githubUrl
			}
		})
	}
	return (
		<tr className=''>
			<td className='text-center border border-txt-light dark:border-txt-dark '>{project.name}</td>
			<td className='px-4 text-center border border-txt-light dark:border-txt-dark ' style={{ color: categoriesMap.get(project.idCategory)?.color }}>{categoriesMap.get(project.idCategory)?.name}</td>
			<td className='px-4 text-center border border-txt-light dark:border-txt-dark ' > <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" >{project.githubUrl.length > 20 ? project.githubUrl.slice(0, 20) : project.githubUrl}</a> </td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border border-txt-light dark:border-txt-dark' >
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faPenToSquare} /> </button>
				<button onClick={() => handleDelete(project.id, project.name)}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faTrashAlt} /></button>
			</td>
		</tr>
	)
}
