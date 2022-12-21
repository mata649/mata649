import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Row = ({
	post,
	handleDelete }: {
		post: Post,
		handleDelete: (id: string, defaultTitle: string) => Promise<void>
	}) => {
	const router = useRouter()

	const handleRedirectToForm = () => {
		const { id, defaultTitle, publishedDate, slug } = post
		router.push({
			pathname: '/admin/posts/form',
			query: {
				id,
				defaultTitle,
				publishedDate,
				slug
			}
		})
	}

	const handleRedirectToPostContent = () => {
		const { id } = post
		router.push({
			pathname: '/admin/posts/content',
			query: {
				idPost:id
			}
		})
	}
	return (
		<tr className=''>
			<td className='text-center border'>{post.defaultTitle}</td>
			<td className='px-4 text-center border ' > <Link href={`/blog/${post.slug}`}  >{post.slug.length > 20 ? post.slug.slice(0, 20) : post.slug}</Link> </td>
			<td className='text-center border'>{moment(post.publishedDate).calendar()}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border' >
				<button className='hover:text-yellow-400' onClick={handleRedirectToPostContent}><span className="material-symbols-outlined">description</span></button>
				<button className='hover:text-yellow-400' onClick={handleRedirectToForm}><span className="material-symbols-outlined">edit</span></button>
				<button className='hover:text-yellow-400' onClick={() => handleDelete(post.id, post.defaultTitle)}><span className="material-symbols-outlined" >delete</span></button>
			</td>
		</tr>
	)
}
