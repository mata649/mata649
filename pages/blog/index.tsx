
import React from 'react'
import { PostCard, PostList } from 'components/post'
import { useFetch,useGetAPI } from 'hooks'
import { PostAPI } from 'api'
import getConfig from 'next/config'
import { Pagination } from 'components/general'

const Blog = () => {
	const {publicRuntimeConfig} = getConfig()
	const postAPI = useGetAPI(new PostAPI(`${publicRuntimeConfig.apiURL}/posts`))
	const { items: posts, setPagination, totalPages, pagination } = useFetch<Post>(
		postAPI,
		{ currentPage: 1, limit: 4 },
		[{ by: "publishedDate", order: "desc" }]
	)

	return (
		<div className='flex flex-col justify-'>
			<PostList>

				{posts.map(({ defaultTitle, publishedDate, slug, id }) => (
					<div key={`post-${id}`} className="col-start-2">
						<PostCard defaultTitle={defaultTitle} publishedDate={publishedDate} slug={slug} id={id} />
					</div>
				))}

			</PostList>
			<div className='flex justify-center'>

				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />

			</div>
		</div>
	)
}

export default Blog