import React from 'react'
import { Row } from 'components/admin/projects'
import { useFetch, useGetAPI, useGetCategoriesMap, useIsLogged } from 'hooks'
import { Pagination } from 'components/general'
import { CategoryAPI, ProjectAPI} from 'api'
import { errorModal, successModal, yesNoModal } from 'helpers'
import axios from 'axios'
import { AddButton, BackButton, Table } from 'components/admin'


const Skills = () => {
	useIsLogged()
	const categoryAPI = useGetAPI(new CategoryAPI(`${process.env.NEXT_PUBLIC_API_HOST}/categories`))
	const projectAPI = useGetAPI(new ProjectAPI(`${process.env.NEXT_PUBLIC_API_HOST}/projects`))

	const { items: projects, setItems: setProjects, pagination, totalPages, setPagination } = useFetch<Project>(
		projectAPI,
		{ currentPage: 1, limit: 10 },
		[{ order: 'asc', by: 'name' }])

	const { items: categories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 100 }, [])


	const categoriesMap = useGetCategoriesMap(categories)

	const handleDelete = async (id: string, name: string) => {
		const result = await yesNoModal(`Do you want to delete ${name}?`)

		if (result.isConfirmed) {
			const resp = await projectAPI.delete(id)
			if (!axios.isAxiosError(resp) && resp !== null) {
				successModal(`${resp.name} was deleted successfully`)
				setProjects(
					projects.filter((project) => (project.id !== id))
				)
				return
			}
			errorModal(`An error occurs while ${name} was being deleted`)
		}


	}
	return (
		<div className='grid grid-cols-5'>
			<div className='flex flex-col col-span-3 col-start-2'>

				<Table labels={['Name','Category','Github URL','Actions']}>
					{projects.map((project) => (
						<Row categoriesMap={categoriesMap} project={project} key={`row-${project.id}`} handleDelete={handleDelete} />
					))}
				</Table>
				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />
				<div className='flex justify-center gap-4'>
					<BackButton />
					<AddButton href='/projects/form' />
				</div>
			</div>

		</div>
	)
}

export default Skills