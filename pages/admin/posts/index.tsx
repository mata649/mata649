import React from 'react'
import { Row } from 'components/admin/posts'
import { useFetch, useGetAPI } from 'hooks'
import { Pagination } from 'components/general'

import getConfig from 'next/config'
import { PostAPI} from 'api'
import { errorModal, successModal, yesNoModal } from 'helpers'
import axios from 'axios'
import { AddButton, BackButton, Table } from 'components/admin'


const Skills = () => {
	const { publicRuntimeConfig } = getConfig()
	const postAPI = useGetAPI(new PostAPI(`${publicRuntimeConfig.apiURL}/posts`))

	const { items: posts, setItems: setPosts, pagination, totalPages, setPagination } = useFetch<Post>(
		postAPI,
		{ currentPage: 1, limit: 10 },
		[{ order: 'desc', by: 'publishedDate' }])



	const handleDelete = async (id: string, name: string) => {
		const result = await yesNoModal(`Do you want to delete ${name}?`)

		if (result.isConfirmed) {
			const resp = await postAPI.delete(id)
			if (!axios.isAxiosError(resp) && resp !== null) {
				successModal(`${resp.defaultTitle} was deleted successfully`)
				setPosts(
					posts.filter((post) => (post.id !== id))
				)
				return
			}
			errorModal(`An error occurs while ${name} was being deleted`)
		}


	}
	return (
		<div className='grid grid-cols-5'>
			<div className='flex flex-col col-span-3 col-start-2'>

				<Table labels={['Default Title', 'Slug', 'Published Date', 'Actions']} >
					{posts.map((post) => (
						<Row post={post} key={`row-${post.id}`} handleDelete={handleDelete} />
					))}
				</Table>
				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />
				<div className='flex justify-center gap-4'>
					<BackButton />
					<AddButton href='/posts/form' />
				</div>
			</div>

		</div >
	)
}

export default Skills