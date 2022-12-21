import React from 'react'
import { Row } from 'components/admin/skills'
import { useFetch, useGetAPI, useGetCategoriesMap } from 'hooks'
import { Pagination } from 'components/general'

import getConfig from 'next/config'
import { CategoryAPI, SkillAPI } from 'api'
import { errorModal, successModal, yesNoModal } from 'helpers'
import axios from 'axios'
import { AddButton, BackButton, Table } from 'components/admin'


const Skills = () => {
	const { publicRuntimeConfig } = getConfig()
	const categoryAPI = useGetAPI(new CategoryAPI(`${publicRuntimeConfig.apiURL}/categories`))
	const skillAPI = useGetAPI(new SkillAPI(`${publicRuntimeConfig.apiURL}/skills`))

	const { items: skills, setItems: setSkills, pagination, totalPages, setPagination } = useFetch<Skill>(
		skillAPI,
		{ currentPage: 1, limit: 10 },
		[{ order: 'asc', by: 'name' }])

	const { items: categories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 100 }, [])


	const categoriesMap = useGetCategoriesMap(categories)
	const handleDelete = async (id: string, name: string) => {
		const result = await yesNoModal(`Do you want to delete ${name}?`)

		if (result.isConfirmed) {
			const resp = await skillAPI.delete(id)
			if (!axios.isAxiosError(resp) && resp !== null) {
				successModal(`${resp.name} was deleted successfully`)
				setSkills(
					skills.filter((skill) => (skill.id !== id))
				)
				return
			}
			errorModal(`An error occurs while ${name} was being deleted`)
		}


	}
	return (
		<div className='grid grid-cols-5'>
			<div className='flex flex-col col-span-3 col-start-2'>

				<Table labels={['Name', 'Category', 'Actions']} >
					{skills.map((skill) => (
						<Row categoriesMap={categoriesMap} skill={skill} key={`row-${skill.id}`} handleDelete={handleDelete} />
					))}
				</Table>
				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />
				<div className='flex justify-center gap-4'>
					<BackButton />
					<AddButton href='/skills/form' />
				</div>
			</div>

		</div >
	)
}

export default Skills