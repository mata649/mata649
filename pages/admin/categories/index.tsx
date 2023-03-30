import React from 'react'
import {  Row } from 'components/admin/categories'
import { useFetch, useGetAPI, useIsLogged } from 'hooks'
import { Pagination } from 'components/general'
import getConfig from 'next/config'
import { CategoryAPI } from 'api'
import { errorModal, successModal, yesNoModal } from 'helpers'
import axios from 'axios'
import { AddButton, BackButton, Table } from 'components/admin'


const Categories = () => {
	useIsLogged()
	const { publicRuntimeConfig } = getConfig()

	const categoryAPI = useGetAPI(new CategoryAPI(`${publicRuntimeConfig.apiURL}/categories`))

	const { items: categories, pagination, totalPages, setPagination, setItems:setCategories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 100 }, [{ order: 'asc', by: 'name' }])


	const handleDelete = async (id: string, name: string) => {
		const result = await yesNoModal(`Do you want to delete ${name}?`)

		if (result.isConfirmed) {
			const resp = await categoryAPI.delete(id)
			if (!axios.isAxiosError(resp) && resp !== null) {
				successModal(`${resp.name} was deleted successfully`)
				setCategories(
					categories.filter((category) => (category.id !== id))
				)
				return
			}
			errorModal(`An error occurs while ${name} was being deleted`)
		}


	}
	return (
		<div className='grid grid-cols-5'>
			<div className='flex flex-col col-span-3 col-start-2'>

				<Table labels={['Name','Actions']} >
					{categories.map((category) => (
						<Row category={category} key={`row-${category.id}`} handleDelete={handleDelete} />
					))}
				</Table>
				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />
				<div className='flex justify-center gap-4'>
					<BackButton />
					<AddButton href='/categories/form' />
				</div>
			</div>

		</div>
	)
}

export default Categories