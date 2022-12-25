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
		<div className="p-2 border ">

			<p className='mb-2 text-3xl truncate border-b-2'>{postContent.title}</p>

			<p className='mb-2'>{postContent.language}</p>
			<div className='flex justify-between'>
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-white hover:text-yellow-400' icon={faPenToSquare} /></button>
				<button className='hover:text-yellow-400' onClick={() => handleDelete(postContent.id, postContent.title)}><FontAwesomeIcon className='text-xl text-white hover:text-yellow-400' icon={faTrashAlt} /></button>
			</div>
		</div>
	)
}
