import { useRouter } from 'next/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
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
			<td className='text-center border border-txt-light dark:border-txt-dark ' style={{ color: category.color }}>{category.name}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border border-txt-light dark:border-txt-dark' >
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faPenToSquare} /> </button>
				<button onClick={() => handleDelete(category.id, category.name)}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faTrashAlt} /></button>
			</td>
		</tr>
	)
}
