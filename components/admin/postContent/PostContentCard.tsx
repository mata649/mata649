import { useRouter } from 'next/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
export const PostContentCard = ({ postContent, handleDelete }: { postContent: PostContent, handleDelete: (id: string, name: string) => Promise<void> }) => {
	const router = useRouter()
	const handleRedirectToForm = () => {
		const { id, content, idPost, language, title } = postContent
		router.push({
			pathname: '/admin/posts/content/form',
			query: {
				id,
				content,
				idPost,
				language,
				title
			}
		})
	}
	return (
		<div className="p-2 border border-txt-light dark:border-txt-dark">

			<p className='mb-2 text-3xl truncate border-b-2 border-txt-light dark:border-txt-dark'>{postContent.title}</p>

			<p className='mb-2'>{postContent.language}</p>
			<div className='flex justify-between '>
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faPenToSquare} /></button>
				<button className='hover:text-secondary dark:hover:text-secondary' onClick={() => handleDelete(postContent.id, postContent.title)}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faTrashAlt} /></button>
			</div>
		</div>
	)
}
