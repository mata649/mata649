import { useRouter } from 'next/router'
import React from 'react'

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
			<td className='text-center border '>{project.name}</td>
			<td className='px-4 text-center border ' style={{ color: categoriesMap.get(project.idCategory)?.color }}>{categoriesMap.get(project.idCategory)?.name}</td>
			<td className='px-4 text-center border ' > <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" >{project.githubUrl.length > 20 ? project.githubUrl.slice(0, 20) : project.githubUrl}</a> </td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border' >
				<button className='hover:text-yellow-400' onClick={handleRedirectToForm}><span className="material-symbols-outlined">edit</span></button>
				<button className='hover:text-yellow-400' onClick={() => handleDelete(project.id, project.name)}><span className="material-symbols-outlined" >delete</span></button>
			</td>
		</tr>
	)
}
