import { PostContentAPI } from 'api'
import axios from 'axios'
import { AddButton } from 'components/admin'
import { PostContentCard } from 'components/admin/postContent'
import { errorModal, successModal, yesNoModal } from 'helpers'
import { useFetch, useGetAPI, useIsLogged } from 'hooks'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React from 'react'

const Content = () => {
	useIsLogged()
	const router = useRouter()
	const { idPost } = router.query
	const { publicRuntimeConfig } = getConfig()
	const postContentAPI = useGetAPI(new PostContentAPI(`${publicRuntimeConfig.apiURL}/postsContent`))
	const { items: postsContent, setItems: setPostContent } = useFetch(postContentAPI, { currentPage: 1, limit: 2 }, [{ order: 'asc', by: 'language' }], { idPost: idPost as string })

	const handleDelete = async (id: string, name: string) => {
		const result = await yesNoModal(`Do you want to delete ${name}?`)

		if (result.isConfirmed) {
			const resp = await postContentAPI.delete(id)
			if (!axios.isAxiosError(resp) && resp !== null) {
				successModal(`${resp.title} was deleted successfully`)
				setPostContent(
					postsContent.filter((content) => (content.id !== id))
				)
				return
			}
			errorModal(`An error occurs while ${name} was being deleted`)
		}


	}


	return (
		<div className='grid sm:grid-cols-3 md:grid-cols-4'>
			<div className='grid grid-cols-2 gap-4 mx-16 sm:col-start-2 md:col-start-2 md:col-span-2 sm:flex-row' >
				{
					postsContent.map((content) => (
						<PostContentCard key={content.id} handleDelete={handleDelete} postContent={content} />
					))
				}{postsContent.length < 2 && (<div className='flex items-center justify-center'><AddButton href={`/posts/content/form?idPost=${idPost}`} /></div>)

				}
			</div>
		</div>
	)
}

export default Content