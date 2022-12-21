import { useRouter } from 'next/router'
import React from 'react'

export const Row = ({
	category,
	handleDelete }: {
		category: Category,
		handleDelete: (id: string, name: string) => Promise<void>
	}) => {

	const router = useRouter()

	const handleRedirectToForm = () => {
		const { id, name, color } = category
		router.push({
			pathname: '/admin/categories/form',
			query: {
				id,
				name,
				color
			}
		})
	}
	return (
		<tr className=''>
			<td className='text-center border ' style={{color: category.color}}>{category.name}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border' >
				<button className='hover:text-yellow-400' onClick={handleRedirectToForm}><span className="material-symbols-outlined">edit</span></button>
				<button className='hover:text-yellow-400' onClick={() => handleDelete(category.id, category.name)}><span className="material-symbols-outlined" >delete</span></button>
			</td>
		</tr>
	)
}
